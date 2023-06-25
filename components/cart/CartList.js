import { useCart } from "../../hooks/useCart";
import calcDiscount from "../../helpers/CalcDiscount";
import priceFormat from "../../helpers/PriceFormat";
import { Board, BoardSection } from "..";
import { Generic, Icon, Image, Level, Select, Title } from "rbx";
import Img from "next/image";
import Link from "next/link";


const CartList = () => {
    const { cartItems, updateCartItems, updateItemsQuantity } = useCart();

    const handleUpdateQuantity = (e, id) => {
        let newQuantity = 0;
        const selectedQuantity = e.target.value;
        const updateItems = cartItems.map(item => {
            if (item.id === id) item.quantity = Number(selectedQuantity);
            return item;
        });

        updateItems.forEach(item => newQuantity += item.quantity);
        localStorage.setItem('cart-items', JSON.stringify(updateItems));
        localStorage.setItem('cart-items-quantity', JSON.stringify(newQuantity));
        updateCartItems(updateItems);
        updateItemsQuantity(newQuantity);
    }
    const handleRemoveToCart = (id) => {
        let newQuantity = 0;

        let itemsToKeep = cartItems.filter(item => { if (item.id !== id) return item });
        itemsToKeep.forEach(item => newQuantity += item.quantity);

        localStorage.setItem('cart-items', JSON.stringify(itemsToKeep));
        localStorage.setItem('cart-items-quantity', JSON.stringify(newQuantity));
        updateCartItems(itemsToKeep);
        updateItemsQuantity(newQuantity);
    }

    return (
        <>
            {cartItems.map((item, index) => {
                return(
                    <Board key={index}>
                        <Level>
                            <Generic className="padding-wrapper">
                                <Image.Container size={128} className="full-centered">
                                    <Img src={`/upload/products/${item.capa}`} width={96} height={48} alt="Foto do livro" />
                                </Image.Container>
                            </Generic>
                            <BoardSection>
                                <Level className="space-between">
                                    <Title size={4} textColor="white" marginless={true}>{item.titulo}</Title>
                                    <Link href={"#"} className="has-text-warning" onClick={ () => handleRemoveToCart(item.id) }>
                                        <Icon>
                                            <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                                        </Icon>
                                    </Link>
                                </Level>
                                <Level>
                                    <Generic className="wrapper-description">
                                        <Generic as="p" className="preview-description" textColor={"white"}>{item.descricao}</Generic>
                                    </Generic>
                                </Level>
                                <Level className="space-between">
                                    <Select.Container>
                                        <Select value={item.quantity} onChange={(e) => handleUpdateQuantity(e, item.id)} >
                                            <Select.Option value={1} >1</Select.Option>
                                            <Select.Option value={2} >2</Select.Option>
                                            <Select.Option value={3} >3</Select.Option>
                                            <Select.Option value={4} >4</Select.Option>
                                            <Select.Option value={5} >5</Select.Option>
                                        </Select>
                                    </Select.Container>
                                    <Generic as="p" textColor="white">
                                        R$ {priceFormat(calcDiscount(item.desconto, item.preco) * item.quantity)}
                                    </Generic>
                                </Level>
                            </BoardSection>
                        </Level>
                    </Board>
                );
            })}
        </>
    );
}

export default CartList;
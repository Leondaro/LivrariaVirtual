import calcDiscount from "../../helpers/CalcDiscount";
import priceFormat from "../../helpers/PriceFormat";
import { useBooks } from "../../hooks/useBooks"
import { useCart } from "../../hooks/useCart";
import { Generic, Column, Card, Level, Block, Title, Button, Icon } from "rbx";
import CardImage from "./CardImage";
import CardContent from "./CardContent";
import Img from "next/image";
import Link from "next/link";


const Cardboard = () => {
    const { books } = useBooks();
    const { itemsQuantity, updateCartItems, updateItemsQuantity } = useCart();

    const handleAddToCart = (book) => {
        const cartItemsStoraged = localStorage.getItem('cart-items');
        let cartItems = [];
        const newItem = { 
            id: book._id,
            titulo: book.titulo,
            capa: book.capa,
            preco: Number(book.preco),
            desconto: Number(book.desconto),
            descricao: book.descricao,
            quantity: 1
        };

        if (cartItemsStoraged) {
            cartItems = JSON.parse(cartItemsStoraged);
            const existingItemIndex = cartItems.findIndex(item => item.id === newItem.id);
            
            existingItemIndex === -1 ? cartItems.push(newItem) : cartItems[existingItemIndex].quantity += 1;
        } else {
            cartItems.push(newItem);
        }

        localStorage.setItem('cart-items', JSON.stringify(cartItems));
        localStorage.setItem('cart-items-quantity', itemsQuantity+1);
        updateCartItems(itemsQuantity+1);
        updateItemsQuantity(itemsQuantity+1);
    }

    return (
        <>
            {books.map(book => {
                return (
                    <Column key={book._id}>
                        <Generic className="box-card">
                            <Card className={"card-size"}>
                                <Column>
                                    <Level.Item>
                                        <CardImage>
                                            <Img src={"/upload/products/" + book.capa} width={200} height={300} alt="Foto da capa do livro" />
                                        </CardImage>
                                    </Level.Item>
                                </Column>
                                <CardContent>
                                    <Block className="card-header-size">
                                        <Title textColor="white" size={5}>{book.titulo}</Title>
                                        <Title subtitle={true} textColor="white" size={6}>{book.autor}</Title>
                                    </Block>
                                    <Block>
                                        <Title size={6} marginless={true} textColor="white" className="scratched" >{"R$ " + priceFormat(Number(book.preco))}</Title>
                                        <Title size={4} textColor="white">{"R$ " + priceFormat(calcDiscount(book.desconto, book.preco))}</Title>
                                    </Block>
                                    <Level>
                                        <Level.Item align="left">
                                            <Link href={"livros/" + book._id}>
                                                <Button color={"warning"}>
                                                    Detalhes
                                                </Button>
                                            </Link>
                                        </Level.Item>
                                        <Level.Item align={"right"}>
                                            <Link href={"#"}>
                                                <Button color={"success"} onClick={() => handleAddToCart(book) }>
                                                    <Icon>
                                                        <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                                    </Icon>
                                                    <Generic as="span">Carrinho</Generic>
                                                </Button>
                                            </Link>
                                        </Level.Item>
                                    </Level>
                                </CardContent>
                            </Card>
                        </Generic>
                    </Column>
                )
            })}
        </>
    )
}

export default Cardboard;
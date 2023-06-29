import { useCart } from "../../hooks/useCart";
import { Button, Generic, Icon } from "rbx";
import { toast } from "react-toastify";
import Link from "next/link";

const CartButton = ({ target }) => {
    const { itemsQuantity, updateCartItems, updateItemsQuantity } = useCart();
    
    const handleToast = () => toast('Item adicionado ao carrinho.', {
        hideProgressBar: true,
        autoClose: 3000,
        type: 'success',
        className: 'toast-message',
        position: toast.POSITION.BOTTOM_CENTER
    });
    const handleAddToCart = (book) => {
        const cartItemsStoraged = localStorage.getItem('cart-items');
        let cartList = [];
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
            cartList = JSON.parse(cartItemsStoraged);
            const existingItemIndex = cartList.findIndex(item => item.id === newItem.id);
            
            existingItemIndex === -1 ? cartList.push(newItem) : cartList[existingItemIndex].quantity += 1;
        } else {
            cartList.push(newItem);
        }

        localStorage.setItem('cart-items', JSON.stringify(cartList));
        localStorage.setItem('cart-items-quantity', itemsQuantity+1);
        updateCartItems(itemsQuantity+1);
        updateItemsQuantity(itemsQuantity+1);
    }

    return(
        <Link href={"#"}>
            <Button color={"success"} onClick={ () => { handleAddToCart(target); handleToast(); } }>
                <Icon>
                    <i className="fa fa-cart-plus"></i>
                </Icon>
                <Generic as="span">
                    Carrinho
                </Generic>
            </Button>
        </Link>
    );
}

export default CartButton;
import { Generic, Level, Title } from "rbx";
import { useCart } from "../../hooks/useCart";

const CartInfo = ({ children }) => {
    const { itemsQuantity } = useCart();

    if (itemsQuantity <= 0) {
        return <Level.Item><Title size={5} textColor="white">O Carrinho está vazio.</Title></Level.Item>;
    }
    return (
        <Generic as="p" textColor="white" className="padding-line-min">
            {children+` ${itemsQuantity}`}
        </Generic>
    );
}

export default CartInfo;
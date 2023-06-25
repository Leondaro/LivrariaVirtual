import { Highlight } from "rbx";

const CartNotification = ({ children }) => {
    return <Highlight as={"strong"} className="cart-notification" textColor={"white"} >{children}</Highlight>;
}

export default CartNotification;
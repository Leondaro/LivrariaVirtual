import priceFormat from "../../helpers/PriceFormat";
import calcDiscount from "../../helpers/CalcDiscount";
import { useCart } from "../../hooks/useCart";
import { Board, BoardSection } from "..";
import { Generic, Column, Icon, Level, Title, Button } from "rbx";
import Link from "next/link";


const CartSummary = () => {
    const { cartItems } = useCart();

    const handleTotalPriceItems = (items) => {
        let total = 0;
        if (items.length > 0) {
            items.forEach(item => {
                total += calcDiscount(item.desconto, item.preco) * item.quantity;
            });
            return total;
        } else {
            return Number("00.00");
        }
    }
    const handleCalcFreight = (countProducts) => {
        if (countProducts > 0) { return 22.90 } else { return Number("00.00") };
    }
    const handleCalcFinalPrice = (products) => {
        if (products.length > 0) { 
            return Number(handleCalcFreight(products.length)) + Number(handleTotalPriceItems(products))
        } else {
            return Number("00.00") 
        };
    }
    
    return (
        <Board>
            <BoardSection>
                <Title textColor="white" className="padding-title">Resumo do Pedido</Title>
                <Level marginless={true} className="space-between">
                    <Title subtitle={true} size={6} textColor="white">Subtotal dos produtos</Title>
                    <Title subtitle={true} size={6} textColor="white">R$ { priceFormat(handleTotalPriceItems(cartItems)) }</Title>
                </Level>
                <Level marginless={true} className="space-between">
                    <Title subtitle={true} size={6} textColor="white">Entrega</Title>
                    <Title subtitle={true} size={6} textColor="white">R$ { priceFormat(handleCalcFreight(cartItems.length)) }</Title>
                </Level>
                <hr />
                <Level marginless={true} className="space-between">
                    <Title size={4} textColor="white">Total</Title>
                    <Title size={4} textColor="white">R$ {priceFormat(handleCalcFinalPrice(cartItems))}</Title>
                </Level>
            </BoardSection>
            
            <BoardSection>
                <Column className="space-between">
                    <Generic className="flex-column">
                        <Link href={"#"} className="min-width has-text-light">
                            <Level>
                                <Icon>
                                    <i className="fa fa-question-circle"></i>
                                </Icon>
                                <Generic as="p" className="underline-hover" textWeight="bold">Ajuda</Generic>
                            </Level>
                        </Link>
                        <Link href={"#"} className="min-width has-text-light">
                            <Level>
                                <Icon>
                                    <i className="fa fa-truck"></i>
                                </Icon>
                                <Generic as="p" className="underline-hover" textWeight="bold">Entregas</Generic>
                            </Level>
                        </Link>
                        <Link href={"#"} className="min-width has-text-light">
                            <Level>
                                <Icon>
                                    <i className="fa fa-money"></i>
                                </Icon>
                                <Generic as="p" className="underline-hover" textWeight="bold">Reembolso</Generic>
                            </Level>
                        </Link>
                    </Generic>
                    <Button color={cartItems.length > 0 ? "success" : "dark" } disabled={cartItems.length > 0 ? false : true }>
                        <Generic as="span">Finalizar Compra</Generic>
                    </Button>
                </Column>
            </BoardSection>
        </Board>
    );
}

export default CartSummary;
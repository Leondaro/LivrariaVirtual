import { CartInfo, CartList, CartSummary, SectionTitle } from "../../components";
import { Generic, Column, Level, Box, Icon, Button } from "rbx";
import Layout from "./layout";
import Link from "next/link";


function Carrinho() {
    return(
        <Layout name={"Carrinho"} >
            <Generic className="home">
                <Column>
                    <Box className="default-width">
                        <Level className="space-between">
                            <Link href={"home"}>
                                <Button color={"info"} outlined={true}>
                                    <Icon>
                                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                    </Icon>
                                    <Generic as="span">Voltar</Generic>
                                </Button>
                            </Link>
                        </Level>
                        <Level marginless={true}>
                            <SectionTitle>Meu Carrinho</SectionTitle>
                        </Level>
                        <Level className="align-top">
                            <Column>
                                <Level>
                                    <CartInfo>Total de produtos:</CartInfo>
                                </Level>
                                <Level>
                                    <Generic className="cart-list-container">
                                        <CartList />
                                    </Generic>
                                </Level>
                            </Column>
                            <Column className="max-width">
                                <Level>
                                    <CartSummary />
                                </Level>
                            </Column>
                        </Level>
                    </Box>
                </Column>
            </Generic>
        </Layout>
    )
}

export default Carrinho;
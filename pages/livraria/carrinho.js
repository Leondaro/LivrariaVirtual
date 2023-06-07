import Image from "next/image";
import { Figure, Board, Text, BoardSection, InputSelect, ArrowLeftIcon, SectionTitle, TrashIcon, QuestionIcon, TruckIcon, MoneyIcon } from "../../components";
import Layout from "./layout";
import Link from "next/link";
import { Generic, Column, Level, Box, Icon, Button } from "rbx";


function Carrinho() {
    return(
        <Layout name={"Carrinho"} >
            <Generic className="home">
                <Column>
                    <Box className="default-width">
                        <Level className="space-between">
                            <Link href={"home"}>
                                <Button color={"info"}>
                                    <Icon>
                                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                    </Icon>
                                    <span>Voltar</span>
                                </Button>
                            </Link>
                        </Level>
                        <Level marginless={true}>
                            <SectionTitle><span className="padding-title">Seu Carrinho</span></SectionTitle>
                        </Level>
                        <Level className="align-top">
                            <Column>
                                <Level>
                                    <Text css={"has-text-white padding-line-min"}>Total (x produtos) R$ 00,00</Text>
                                </Level>
                                <Level>
                                    <Board>
                                        <Level>
                                            <Generic className="padding-wrapper">
                                                <Figure css={"image is-128x128 full-centered"} >
                                                    <Image src={"/_img/shelfbook.jpg"} width={96} height={48} alt="Foto do livro"></Image>
                                                </Figure>
                                            </Generic>
                                            <BoardSection>
                                                <Level className="space-between">
                                                    <Text css={"title is-4 has-text-white is-marginless"}>Titulo</Text>
                                                    <Link href={"#"} className="has-text-warning">
                                                        <Icon>
                                                            <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                                                        </Icon>
                                                    </Link>
                                                </Level>
                                                <Level>
                                                    <Text css={"has-text-white"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui metus, rutrum in elit ac, congue posuere sapien. Aliquam convallis massa felis, quis pharetra augue malesuada venenatis.</Text>
                                                </Level>
                                                <Level className="space-between">
                                                    <InputSelect />
                                                    <Text css={"has-text-white"}>R$ 00,00</Text>
                                                </Level>
                                            </BoardSection>
                                        </Level>
                                    </Board>
                                </Level>
                            </Column>
                            <Column className="max-width">
                                <Level>
                                    <Board>
                                        <BoardSection>
                                            <Text css={"title has-text-white padding-title"} >Resumo do Pedido</Text>
                                            <Level marginless={true} className="space-between">
                                                <Text css={"subtitle is-6 has-text-white"} >Subtotal dos produtos</Text>
                                                <Text css={"subtitle is-6 has-text-white"} >R$ 00,00</Text>
                                            </Level>
                                            <Level marginless={true} className="space-between">
                                                <Text css={"subtitle is-6 has-text-white"} >Entrega</Text>
                                                <Text css={"subtitle is-6 has-text-white"} >R$ 00,00</Text>
                                            </Level>
                                            <hr />
                                            <Level marginless={true} className="space-between">
                                                <Text css={"title is-4 has-text-white"}>Total</Text>
                                                <Text css={"title is-4 has-text-white"}>R$ 00,00</Text>
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
                                                            <strong><Text css={"underline-hover"}>Ajuda</Text></strong>
                                                        </Level>
                                                    </Link>
                                                    <Link href={"#"} className="min-width has-text-light">
                                                        <Level>
                                                            <Icon>
                                                                <i className="fa fa-truck"></i>
                                                            </Icon>
                                                            <strong><Text css={"underline-hover"}>Entregas</Text></strong>
                                                        </Level>
                                                    </Link>
                                                    <Link href={"#"} className="min-width has-text-light">
                                                        <Level>
                                                            <Icon>
                                                                <i className="fa fa-money"></i>
                                                            </Icon>
                                                            <strong><Text css={"underline-hover"}>Reembolso</Text></strong>
                                                        </Level>
                                                    </Link>
                                                </Generic>
                                                <Button color={"success"}>
                                                    <span>Finalizar Compra</span>
                                                </Button>
                                            </Column>
                                        </BoardSection>
                                    </Board>
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
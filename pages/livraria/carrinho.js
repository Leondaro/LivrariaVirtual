import { Board, BoardSection, SectionTitle } from "../../components";
import { Generic, Column, Level, Box, Icon, Button, Select, Title, Image } from "rbx";
import Layout from "./layout";
import Img from "next/image";
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
                            <SectionTitle>Seu Carrinho</SectionTitle>
                        </Level>
                        <Level className="align-top">
                            <Column>
                                <Level>
                                    <Generic as="p" textColor="white" className="padding-line-min">
                                        Total (x produtos) R$ 00,00
                                    </Generic>
                                </Level>
                                <Level>
                                    <Board>
                                        <Level>
                                            <Generic className="padding-wrapper">
                                                <Image.Container size={128} className="full-centered">
                                                    <Img src={"/_img/shelfbook.jpg"} width={96} height={48} alt="Foto do livro" />
                                                </Image.Container>
                                            </Generic>
                                            <BoardSection>
                                                <Level className="space-between">
                                                    <Title size={4} textColor="white" marginless={true}>Titulo</Title>
                                                    <Link href={"#"} className="has-text-warning">
                                                        <Icon>
                                                            <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                                                        </Icon>
                                                    </Link>
                                                </Level>
                                                <Level>
                                                    <Generic as="p" textColor="white">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui metus, rutrum in elit ac, congue posuere sapien. Aliquam convallis massa felis, quis pharetra augue malesuada venenatis.
                                                    </Generic>
                                                </Level>
                                                <Level className="space-between">
                                                    <Select.Container>
                                                        <Select>
                                                            <Select.Option>1</Select.Option>
                                                            <Select.Option>2</Select.Option>
                                                            <Select.Option>3</Select.Option>
                                                        </Select>
                                                    </Select.Container>
                                                    <Generic as="p" textColor="white">
                                                        R$ 00,00
                                                    </Generic>
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
                                            <Title textColor="white" className="padding-title">Resumo do Pedido</Title>
                                            <Level marginless={true} className="space-between">
                                                <Title subtitle={true} size={6} textColor="white">Subtotal dos produtos</Title>
                                                <Title subtitle={true} size={6} textColor="white">R$ 00,00</Title>
                                            </Level>
                                            <Level marginless={true} className="space-between">
                                                <Title subtitle={true} size={6} textColor="white">Entrega</Title>
                                                <Title subtitle={true} size={6} textColor="white">R$ 00,00</Title>
                                            </Level>
                                            <hr />
                                            <Level marginless={true} className="space-between">
                                                <Title size={4} textColor="white">Total</Title>
                                                <Title size={4} textColor="white">R$ 00,00</Title>
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
                                                <Button color={"success"}>
                                                    <Generic as="span">Finalizar Compra</Generic>
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
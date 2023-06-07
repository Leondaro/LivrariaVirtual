import Image from "next/image";
import { Figure, Board, Text, BoardSection, CartIcon, ArrowLeftIcon } from "../../../components";
import Layout from "../layout";
import Link from "next/link";
import { Generic, Box, Level, Column, Button, Icon } from "rbx";


function Livros() {
    return(
        <Layout name={"Descrição do Livro"}>
            <Generic className="home">
                <Column>
                    <Box className="default-width">
                        <Level className="space-between">
                            <Link href={"/livraria/home"}>
                                <Button color={"info"} outlined={true}>
                                    <Icon>
                                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                    </Icon>
                                    <span>Voltar</span>
                                </Button>
                            </Link>
                        </Level>
                        <Level>
                            <Column className="full-centered">
                                <Figure css={"image is-128x128"}>
                                    <Image src={"/_img/shelfbook.jpg"} width={256} height={640} alt="Foto do livro"></Image>
                                </Figure>
                            </Column>
                            <Column className="max-width full-centered">
                                <Level>
                                    <Board>
                                        <BoardSection>
                                            <Text css={"title is-5 has-text-white is-marginless"} >Titulo do Livro</Text>
                                            <Text css={"subtitle is-6 has-text-white is-marginless"} >Autor do Livro</Text>
                                            <Text css={"title is-4 has-text-white is-marginless"} >Preço</Text>
                                        </BoardSection>
                                        <BoardSection>
                                            <Text css={"is-marginless has-text-white"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui metus, rutrum in elit ac, congue posuere sapien. Aliquam convallis massa felis, quis pharetra augue malesuada venenatis.</Text>
                                        </BoardSection>
                                        <BoardSection>
                                            <Column className="full-centered">
                                                <Link href={"/livraria/carrinho"}>
                                                    <Button color={"success"}>
                                                        <Icon>
                                                            <i className="fa fa-cart-plus"></i>
                                                        </Icon>
                                                        <span>Adicionar ao Carrinho</span>
                                                    </Button>
                                                </Link>
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

export default Livros;
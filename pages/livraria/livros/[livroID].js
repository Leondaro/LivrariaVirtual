import { Board, BoardSection } from "../../../components";
import { Generic, Box, Level, Column, Button, Title, Image, Icon } from "rbx";
import Layout from "../layout";
import Link from "next/link";
import Img from "next/image";


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
                                    <Generic as="span">Voltar</Generic>
                                </Button>
                            </Link>
                        </Level>
                        <Level>
                            <Column className="full-centered">
                                <Image.Container>
                                    <Img src={"/_img/shelfbook.jpg"} width={256} height={640} alt="Foto do livro" />
                                </Image.Container>
                            </Column>
                            <Column className="max-width full-centered">
                                <Level>
                                    <Board>
                                        <BoardSection>
                                            <Title size={5} textColor="white" marginless={true}>Titulo do Livro</Title>
                                            <Title subtitle={true} size={6} textColor="white" marginless={true}>Autor do Livro</Title>
                                            <Title size={4} textColor="white" marginless={true}>Preço</Title>
                                        </BoardSection>
                                        <BoardSection>
                                            <Generic as="p" textColor="white" marginless={true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui metus, rutrum in elit ac, congue posuere sapien. Aliquam convallis massa felis, quis pharetra augue malesuada venenatis.</Generic>
                                        </BoardSection>
                                        <BoardSection>
                                            <Column className="full-centered">
                                                <Link href={"/livraria/carrinho"}>
                                                    <Button color={"success"}>
                                                        <Icon>
                                                            <i className="fa fa-cart-plus"></i>
                                                        </Icon>
                                                        <Generic as="span">
                                                            Adicionar ao Carrinho
                                                        </Generic>
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
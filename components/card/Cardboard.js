import calcDiscount from "../../helpers/CalcDiscount";
import { useBooks } from "../../hooks/useBooks"
import { Generic, Column, Card, Level, Block, Title, Button, Icon } from "rbx";
import CardImage from "./CardImage";
import CardContent from "./CardContent";
import Img from "next/image";
import Link from "next/link";


const Cardboard = () => {
    const { books } = useBooks();

    return (
        <>
            {books.map((book, index) => {
                return (
                    <Column key={book._id}>
                        <Generic className="box-card">
                            <Card className={"card-size"}>
                            <Column>
                                    <Level.Item>
                                        <CardImage>
                                            <Img src={"/upload/products/" + books[index].capa} width={200} height={300} alt="Foto da capa do livro" />
                                        </CardImage>
                                    </Level.Item>
                                </Column>
                                <CardContent>
                                    <Block className="card-header-size">
                                        <Title textColor="white" size={5}>{books[index].titulo}</Title>
                                        <Title subtitle={true} textColor="white" size={6}>{books[index].autor}</Title>
                                    </Block>
                                    <Block>
                                        <Title size={6} marginless={true} textColor="white" className="scratched" >{"R$ " + books[index].preco}</Title>
                                        <Title size={4} textColor="white">{"R$ " + calcDiscount(books[index].desconto, books[index].preco)}</Title>
                                    </Block>
                                    <Level>
                                        <Level.Item align="left">
                                            <Link href={"livros/" + books[index]._id}>
                                                <Button color={"warning"}>
                                                    Detalhes
                                                </Button>
                                            </Link>
                                        </Level.Item>
                                        <Level.Item align={"right"}>
                                            <Link href={"carrinho"}>
                                                <Button color={"success"}>
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
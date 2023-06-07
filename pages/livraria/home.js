import { useState, useEffect } from "react";
import api from "../../services/api";
import calcDiscount from "../../helpers/CalcDiscount";
import { SectionTitle, CardHeader, CardContent, CardImage, Text, CardPlaceholder, CartIcon, Figure } from "../../components";
import Layout from "./layout";
import Link from "next/link";
import { Generic, Media, Box, Column, Level, Card, Block, Icon, Image, Button } from "rbx";


function Home() {
    const [books, setBooks] = useState([]);
    const [rows, setRows] = useState([0]);
    const [isLoading, setIsLoading] = useState(false);
    const cols = [0, 1, 2, 3]
    const ratio = cols.length;

    const HandlerGetBooks = async () => {
        try {
            setIsLoading(true);
            await api.get('/clients')
            .then(response => {
                setBooks(response.data);
            });
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        (async () => {
            HandlerGetBooks();
        })();
    }, []);
    useEffect(()=> {
        const rowsAmount = books.length/cols.length;
        if (rows.length < rowsAmount) {
            for (let index = 1; index < rowsAmount; index++) {
                setRows(values => ([...values, index]));
            }
        }
    }, [books])

    return (
        <Layout name={"Home"}>
            <Generic className="home">
                <Column narrow={true}>
                    <Box>
                        <SectionTitle><span className="padding-title">Populares</span></SectionTitle>
                        {(() => {
                            if (isLoading) return (
                                <Generic className="card-columns">
                                    {cols.map(col => {
                                        return (
                                            <CardPlaceholder key={col} />
                                        )
                                    })}
                                </Generic>
                            );
                            else return (
                                <>
                                    {rows.map((row, index) => {
                                        return (
                                            <Generic className="card-columns" key={index}>
                                                {cols.map(col => {
                                                    if (books.length > 0) {
                                                        return (
                                                            <Column key={books[col + (row * ratio)]._id}>
                                                                <Generic className="box-card">
                                                                    <Card className={"card-size"}>
                                                                        <Column>
                                                                            <Level.Item>
                                                                                <Card.Image className={"card-imagem-size"}>
                                                                                    <Figure css={"Image"}>
                                                                                        <Image src={"/upload/products/" + books[col + (row * ratio)].capa} width={171} height={240} alt="Foto da capa do livro" />
                                                                                    </Figure>
                                                                                </Card.Image>
                                                                            </Level.Item>
                                                                        </Column>
                                                                        <Card.Content>
                                                                            <Media.Item>
                                                                                <Block className="card-title-size">
                                                                                    <Text css={"title is-5 has-text-white"} >{books[col + (row * ratio)].titulo}</Text>
                                                                                    <Text css={"subtitle is-6 has-text-white"} >{books[col + (row * ratio)].autor}</Text>
                                                                                </Block>
                                                                                <Block>
                                                                                    <Text css={"title is-6 is-marginless has-text-white scratched"}>{"R$ " + books[col + (row * ratio)].preco}</Text>
                                                                                    <Text css={"title is-4 has-text-white"}>{"R$ " + calcDiscount(books[col + (row * ratio)].desconto, books[col + (row * ratio)].preco)}</Text>
                                                                                </Block>
                                                                                <Level>
                                                                                    <Level.Item align={"left"}>
                                                                                        <Link href={"livros/" + books[col + (row * ratio)]._id}>
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
                                                                                                <span>Carrinho</span>
                                                                                            </Button>
                                                                                        </Link>
                                                                                    </Level.Item>
                                                                                </Level>
                                                                            </Media.Item>
                                                                        </Card.Content>
                                                                    </Card>
                                                                </Generic>
                                                            </Column>
                                                        )
                                                    }
                                                })}
                                            </Generic>
                                        )
                                    })}
                                </>
                            );
                        })()}
                    </Box>
                </Column>
            </Generic>
        </Layout>
    );
}

export default Home;
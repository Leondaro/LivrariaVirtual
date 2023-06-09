import { useState, useEffect } from "react";
import api from "../../services/api";
import calcDiscount from "../../helpers/CalcDiscount";
import { SectionTitle, CardPlaceholder } from "../../components";
import { Generic, Media, Box, Column, Level, Card, Block, Icon, Image, Button, Title } from "rbx";
import Layout from "./layout";
import Img from "next/image";
import Link from "next/link";


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
                        <SectionTitle>Populares</SectionTitle>
                        {(() => {
                            if (isLoading) return (
                                <Generic className="card-columns">
                                    {cols.map(col => {
                                        return (
                                            <Column key={col}>
                                                <Generic className="box-card">
                                                    <CardPlaceholder />
                                                </Generic>
                                            </Column>
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
                                                                                <Card.Image>
                                                                                    <Image.Container>
                                                                                        <Img src={"/upload/products/" + books[col + (row * ratio)].capa} width={200} height={300} alt="Foto da capa do livro" />
                                                                                    </Image.Container>
                                                                                </Card.Image>
                                                                            </Level.Item>
                                                                        </Column>
                                                                        <Card.Content>
                                                                            <Media.Item>
                                                                                <Block className="card-header-size">
                                                                                    <Title textColor="white" size={5}>{books[col + (row * ratio)].titulo}</Title>
                                                                                    <Title subtitle={true} textColor="white" size={6}>{books[col + (row * ratio)].autor}</Title>
                                                                                </Block>
                                                                                <Block>
                                                                                    <Title size={6} marginless={true} textColor="white" className="scratched" >{"R$ " + books[col + (row * ratio)].preco}</Title>
                                                                                    <Title size={4} textColor="white">{"R$ " + calcDiscount(books[col + (row * ratio)].desconto, books[col + (row * ratio)].preco)}</Title>
                                                                                </Block>
                                                                                <Level>
                                                                                    <Level.Item align="left">
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
                                                                                                <Generic as="span">Carrinho</Generic>
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
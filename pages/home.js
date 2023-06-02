import { useState, useEffect } from "react";
import api from "../services/api";
import calcDiscount from "../helpers/CalcDiscount"
import { NavMenu, Footer, Section, SectionTitle, Card, CardHeader, CardContent, CardImage, Text, CardPlaceholder, Button, CartIcon } from "../components";
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
        <>
            <div>
                <meta name="robots" content="Home, follow" />
                <meta name="author" content="Conatto" />
                <meta name="description" content="Site sobre..." />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
                <title>Livraria Virtual - Home</title>
            </div>
            <NavMenu />
            <Section>
                <div className="home-columns">
                    <div className="column is-narrow pt-0">
                        <div className="box">
                            <SectionTitle><span className="padding-title">Populares</span></SectionTitle>
                            {(() => {
                                if (isLoading) return (
                                    <>
                                        <div className="card-columns">
                                            {cols.map(col => {
                                                return (
                                                    <CardPlaceholder key={col} />
                                                )
                                            })}
                                        </div>
                                    </>
                                );
                                else return (
                                    <>
                                        {rows.map((row, index) => {
                                            return (
                                                <div className="card-columns" key={index}>
                                                    {cols.map(col => {
                                                        if (books.length > 0) {
                                                            return (
                                                                <Card key={books[col + (row * ratio)]._id} >
                                                                    <CardImage urlImage={books[col + (row * ratio)].capa} />
                                                                    <CardContent>
                                                                        <CardHeader>
                                                                            <Text css={"title is-5 has-text-white"} >{books[col + (row * ratio)].titulo}</Text>
                                                                            <Text css={"subtitle is-6 has-text-white"} >{books[col + (row * ratio)].autor}</Text>
                                                                        </CardHeader>
                                                                        <Text css={"title is-6 is-marginless has-text-white is-scratched"}>{"R$ " + books[col + (row * ratio)].preco}</Text>
                                                                        <Text css={"title is-4 has-text-white"}>{"R$ " + calcDiscount(books[col + (row * ratio)].desconto, books[col + (row * ratio)].preco)}</Text>
                                                                        <div className="level is-mobile">
                                                                            <div className="level-left">
                                                                                <Link href={"ProdutoID"}>
                                                                                    <Button css={"button is-warning"}>
                                                                                        Detalhes
                                                                                    </Button>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="level-right ml-4">
                                                                                <Link href={"carrinho"}>
                                                                                    <Button css={"button is-success"}>
                                                                                        <CartIcon />
                                                                                        <span>Carrinho</span>
                                                                                    </Button>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </CardContent>
                                                                </Card>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )
                                        })}
                                    </>
                                );
                            })()}
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />
        </>
    );
}

export default Home;
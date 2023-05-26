import { useState, useEffect } from "react";
import api from "../services/api";
import calcDiscount from "../helpers/CalcDiscount"
import { NavMenu, Footer, Section, SectionTitle, Card, CardPlaceholder } from "../components";


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
            <header>
                <NavMenu />
            </header>
            <Section>
                <SectionTitle title="Populares" />
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
                                                        <Card key={books[col + (row * ratio)]._id}
                                                            urlImage={books[col + (row * ratio)].capa}
                                                            titulo={books[col + (row * ratio)].titulo}
                                                            autor={books[col + (row * ratio)].autor}
                                                            preco={books[col + (row * ratio)].preco}
                                                            precoDesconto={
                                                                calcDiscount(books[col + (row * ratio)].desconto,
                                                                    books[col + (row * ratio)].preco)
                                                            }
                                                        />
                                                    )
                                                }
                                            })}
                                        </div>
                                    )
                                })}
                            </>
                        );
                    })()}
            </Section>
            <Footer />
        </>
    );
}

export default Home;
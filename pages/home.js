import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import api from "../services/api";
import { useState, useEffect } from "react";
import Card from "../components/Card";


function Home() {
    //Dados retornados de uma consulda devem ser enviados
    //para o componente CollectionCards.
    const [books, setBooks] = useState([]);
    const [rows, setRows] = useState([0]);
    const cols = [0, 1, 2, 3]
    const ratio = cols.length;

    const precoDesconto = (sale, price) => {
        sale = parseFloat(sale, 2);
        price = parseFloat(price, 2);
        let result = ((100-sale)/100)*price;

        result = Number((result).toFixed(2)).toString();
        let newPrice = result.split(".").shift();
        let decimal = result.split(".").pop();
        if (decimal.length < 2) decimal += "0";

        return newPrice+","+decimal;
    }

    useEffect(() => {
        (async () => {
            api.get('/clients')
            .then(({ data }) => {
                console.log("data ready!")
                setBooks(data.content)
            });
        })();
    }, []);

    useEffect(()=> {
        const rowsAmount = books.length/cols.length;
        if (rows.length < rowsAmount)
            for (let index = 1; index < rowsAmount; index++) {
                setRows(values => ([...values, index]));
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
                    { rows.map((row, index) => {
                        return (
                            <div className="columns" key={index}>
                                {cols.map(col => {
                                    if (books.length > 0) {
                                        return (
                                            <Card key={books[col+(row*ratio)]._id}
                                                urlImage={books[col+(row*ratio)].capa}
                                                titulo={books[col+(row*ratio)].titulo}
                                                autor={books[col+(row*ratio)].autor}
                                                preco={books[col+(row*ratio)].preco}
                                                precoDesconto={
                                                    precoDesconto(books[col+(row*ratio)].desconto, 
                                                    books[col+(row*ratio)].preco)
                                                }
                                            />
                                        )
                                    }
                                })}
                            </div>
                        )
                    }) }
            </Section>
            <Footer />
        </>
    );
}

export default Home;
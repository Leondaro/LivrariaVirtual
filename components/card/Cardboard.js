import calcDiscount from "../../helpers/CalcDiscount";
import priceFormat from "../../helpers/PriceFormat";
import { useBooks } from "../../hooks/useBooks"
import { CartButton } from "..";
import { Generic, Column, Card, Level, Block, Title, Button } from "rbx";
import CardImage from "./CardImage";
import CardContent from "./CardContent";
import Img from "next/image";
import Link from "next/link";


const Cardboard = () => {
    const { books } = useBooks();
    
    const handleDescription = (book) => {
        const bookStoraged = localStorage.getItem('book');
        
        if (bookStoraged) if (bookStoraged.id === book._id) return
        const selectedBook = {
            id: book._id,
            capa: book.capa,
            titulo: book.titulo,
            autor: book.autor,
            preco: Number(book.preco),
            desconto: Number(book.desconto),
            descricao: book.descricao,
        }
        localStorage.setItem('book', JSON.stringify(selectedBook));
    }

    return (
        <>
            {books.map(book => {
                return (
                    <Column key={book._id}>
                        <Generic className="box-card">
                            <Card className={"card-size"}>
                                <Column>
                                    <Level.Item>
                                        <CardImage>
                                            <Img src={"/upload/products/" + book.capa} width={200} height={300} alt="Foto da capa do livro" />
                                        </CardImage>
                                    </Level.Item>
                                </Column>
                                <CardContent>
                                    <Block className="card-header-size">
                                        <Title textColor="white" size={5}>{book.titulo}</Title>
                                        <Title subtitle={true} textColor="white" size={6}>{book.autor}</Title>
                                    </Block>
                                    <Block>
                                        <Title size={6} marginless={true} textColor="white" className="scratched" >{"R$ " + priceFormat(Number(book.preco))}</Title>
                                        <Title size={4} textColor="white">{"R$ " + priceFormat(calcDiscount(book.desconto, book.preco))}</Title>
                                    </Block>
                                    <Level>
                                        <Level.Item align="left">
                                            <Link href={"/livraria/livros/" + book._id}>
                                                <Button color={"warning"} onClick={() => handleDescription(book) }>
                                                    Detalhes
                                                </Button>
                                            </Link>
                                        </Level.Item>
                                        <Level.Item align={"right"}>
                                            <CartButton target={book} />
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
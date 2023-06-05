import Link from "next/link";
import { NavMenu, Button, Figure, Section, Footer, Board, Text, BoardSection, CartIcon, ArrowLeftIcon } from "../../components";

function Livros() {
    return(
        <>
            <div>
                <meta name="robots" content="Home, follow" />
                <meta name="author" content="Conatto" />
                <meta name="description" content="Site sobre..." />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
                <title>Livraria Virtual - Livro</title>
            </div>
            <NavMenu />
            <Section>
                <div className="home-columns">
                    <div className="column pt-0">
                        <div className="box default-width">
                            <div className="level space-between">
                                <Link href={"home"}>
                                    <Button css={"button is-outlined is-info"}>
                                        <ArrowLeftIcon /> <span>Voltar</span>
                                    </Button>
                                </Link>
                            </div>
                            <div className="level">
                                <div className="column">
                                    <div className="level full-centered">
                                        <Figure css={"image is-128x128"} srcImage={"_img/shelfbook.jpg"}></Figure>
                                    </div>
                                </div>
                                <div className="column max-width full-centered">
                                    <div className="level">
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
                                                <div className="column full-centered">
                                                    <Link href={"carrinho"}>
                                                        <Button css={"button is-success"}>
                                                            <CartIcon />
                                                            <span>Adicionar ao Carrinho</span>
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </BoardSection>
                                        </Board>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />
        </>
    )
}

export default Livros;
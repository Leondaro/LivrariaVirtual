import Image from "next/image";
import { Button, Figure, Board, Text, BoardSection, CartIcon, ArrowLeftIcon } from "../../../components";
import Layout from "../layout";
import Link from "next/link";


function Livros() {
    return(
        <Layout name={"Descrição do Livro"}>
            <div className="home-columns">
                <div className="column pt-0">
                    <div className="box default-width">
                        <div className="level space-between">
                            <Link href={"/livraria/home"}>
                                <Button css={"button is-outlined is-info"}>
                                    <ArrowLeftIcon /> <span>Voltar</span>
                                </Button>
                            </Link>
                        </div>
                        <div className="level">
                            <div className="column">
                                <div className="level full-centered">
                                    <Figure css={"image is-128x128"}>
                                        <Image src={"/_img/shelfbook.jpg"} width={256} height={640} alt="Foto do livro"></Image>
                                    </Figure>
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
                                                <Link href={"/livraria/carrinho"}>
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
        </Layout>
    )
}

export default Livros;
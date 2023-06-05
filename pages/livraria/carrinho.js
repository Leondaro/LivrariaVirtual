import Image from "next/image";
import { Button, Figure, Board, Text, BoardSection, InputSelect, ArrowLeftIcon, SectionTitle, TrashIcon, QuestionIcon, TruckIcon, MoneyIcon } from "../../components";
import Layout from "./layout";
import Link from "next/link";


function Carrinho() {
    return(
        <Layout name={"Carrinho"} >
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
                        <div className="level is-marginless">
                            <SectionTitle><span className="padding-title">Seu Carrinho</span></SectionTitle>
                        </div>
                        
                        <div className="level align-top">
                            <div className="column">
                                <div className="level">
                                    <Text css={"has-text-white padding-line-min"}>Total (x produtos) R$ 00,00</Text>
                                </div>
                                <div className="level">
                                    <Board>
                                        <div className="level">
                                            <div className="padding-wrapper">
                                                <Figure css={"image is-128x128 full-centered"} >
                                                    <Image src={"/_img/shelfbook.jpg"} width={96} height={48} alt="Foto do livro"></Image>
                                                </Figure>
                                            </div>
                                            <BoardSection>
                                                <div className="level is-justify-content-between">
                                                    <Text css={"title is-4 has-text-white is-marginless"}>Titulo</Text>
                                                    <Link href={"#"} className="has-text-warning">
                                                        <TrashIcon />
                                                    </Link>
                                                </div>
                                                <div className="level">
                                                    <Text css={"has-text-white"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui metus, rutrum in elit ac, congue posuere sapien. Aliquam convallis massa felis, quis pharetra augue malesuada venenatis.</Text>
                                                </div>
                                                <div className="level is-justify-content-between">
                                                    <InputSelect />
                                                    <Text css={"has-text-white"}>R$ 00,00</Text>
                                                </div>
                                            </BoardSection>
                                        </div>
                                    </Board>
                                </div>

                                <div className="level">
                                    <Board>
                                        <div className="level">
                                            <div className="padding-wrapper">
                                                <Figure css={"image is-128x128 full-centered"} srcImage={"_img/shelfbook.jpg"}></Figure>
                                            </div>
                                            <BoardSection>
                                                <div className="level is-justify-content-between">
                                                    <Text css={"title is-4 has-text-white is-marginless"}>Titulo</Text>
                                                    <Link href={"#"} className="has-text-warning">
                                                        <TrashIcon />
                                                    </Link>
                                                </div>
                                                <div className="level">
                                                    <Text css={"has-text-white"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui metus, rutrum in elit ac, congue posuere sapien. Aliquam convallis massa felis, quis pharetra augue malesuada venenatis.</Text>
                                                </div>
                                                <div className="level is-justify-content-between">
                                                    <InputSelect />
                                                    <Text css={"has-text-white"}>R$ 00,00</Text>
                                                </div>
                                            </BoardSection>
                                        </div>
                                    </Board>
                                </div>

                                <div className="level">
                                    <Board>
                                        <div className="level">
                                            <div className="padding-wrapper">
                                                <Figure css={"image is-128x128 full-centered"} srcImage={"_img/shelfbook.jpg"}></Figure>
                                            </div>
                                            <BoardSection>
                                                <div className="level is-justify-content-between">
                                                    <Text css={"title is-4 has-text-white is-marginless"}>Titulo</Text>
                                                    <Link href={"#"} className="has-text-warning">
                                                        <TrashIcon />
                                                    </Link>
                                                </div>
                                                <div className="level">
                                                    <Text css={"has-text-white"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui metus, rutrum in elit ac, congue posuere sapien. Aliquam convallis massa felis, quis pharetra augue malesuada venenatis.</Text>
                                                </div>
                                                <div className="level is-justify-content-between">
                                                    <InputSelect />
                                                    <Text css={"has-text-white"}>R$ 00,00</Text>
                                                </div>
                                            </BoardSection>
                                        </div>
                                    </Board>
                                </div>
                            </div>
                            <div className="column max-width">
                                <div className="level">
                                    <Board>
                                        <BoardSection>
                                            <Text css={"title has-text-white padding-title"} >Resumo do Pedido</Text>
                                            <div className="level is-marginless justift-content-space-between">
                                                <Text css={"subtitle is-6 has-text-white"} >Subtotal dos produtos</Text>
                                                <Text css={"subtitle is-6 has-text-white"} >R$ 00,00</Text>
                                            </div>
                                            <div className="level is-marginless justift-content-space-between">
                                                <Text css={"subtitle is-6 has-text-white"} >Entrega</Text>
                                                <Text css={"subtitle is-6 has-text-white"} >R$ 00,00</Text>
                                            </div>
                                            <hr />
                                            <div className="level is-marginless justift-content-space-between">
                                                <Text css={"title is-4 has-text-white"}>Total</Text>
                                                <Text css={"title is-4 has-text-white"}>R$ 00,00</Text>
                                            </div>
                                        </BoardSection>
                                        
                                        <BoardSection>
                                            <div className="column space-between">
                                                <div className="flex-column">
                                                    <Link href={"#"} className="min-width">
                                                        <span className="level">
                                                            <QuestionIcon />
                                                            <strong><Text css={"has-text-white underline-hover"}>Ajuda</Text></strong>
                                                        </span>        
                                                    </Link>
                                                    <Link href={"#"} className="min-width">
                                                        <span className="level">
                                                            <TruckIcon />
                                                            <strong><Text css={"has-text-white underline-hover"}>Entregas</Text></strong>
                                                        </span>
                                                    </Link>
                                                    <Link href={"#"} className="min-width">
                                                        <span className="level">
                                                            <MoneyIcon />                               
                                                            <strong><Text css={"has-text-white underline-hover"}>Reembolso</Text></strong>
                                                        </span>
                                                    </Link>
                                                </div>
                                                
                                                <Button css={"button is-success"}>
                                                    <span>Finalizar Compra</span>
                                                </Button>
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

export default Carrinho;
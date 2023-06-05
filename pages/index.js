import { React } from "react";
import { Form, InputField, EmailIcon, KeyIcon, Button, Text, Figure } from "../components";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


function Login() {
    return (
        <>
            <Head>
                <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="content-language" content="pt-br" />
                <meta name="author" content="Conatto" />
                <meta name="description" content="Um exemplo de uma aplicação web para venda de livros" />
                <meta name="keywords" content="portfolio, aplicação web, livraria, livros, livraria virtual" />
                <meta name="robots" content="Index, follow" />

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
                <title>Bem-Vindo! - Livraria Virtual</title>
            </Head>
            <section className="section level is-marginless">
                <div className="level-item">
                    <div className="column is-4">
                        <div className="box border-burgundy">
                            <div className="column level">
                                <div className="level level-item">
                                    <Figure className="image">
                                        <Link href={"/"}>
                                            <Image id="logo" src={"/_img/LivrariaLogo.png"} width={256} height={127} alt="Logotipo do site" /> 
                                        </Link>
                                    </Figure>
                                </div>
                                <div className="level-item is-mobile">
                                    <Form id={"login"}>
                                        <div id="mensagem"></div>
                                        <InputField inputType={"text"} inputName={"usuario"}>
                                            <EmailIcon />
                                        </InputField>

                                        <InputField inputType={"password"} inputName={"senha"}>
                                            <KeyIcon />
                                        </InputField>
                                        <div className="mt-6 ml-3 mr-3">
                                            <div className="block level is-mobile">
                                                <Link className="level-item" href={"/livraria/home"}>
                                                    <Button id={"btLogar"} css={"level-item button is-outlined is-link"}>Login</Button>
                                                </Link>
                                            </div>
                                            <div className="block level is-mobile">
                                                <Button id={"btCadastrar"} css={"level-item button is-outlined is-success"}>Cadastro</Button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                                <hr />
                                <div>
                                    <div className="level level-item is-marginless">
                                        <strong><Text css={"has-text-white has-text-centered"}>Este é um projeto demosntrativo.</Text></strong>
                                    </div>
                                    <div className="level level-item is-marginless">
                                        <Link href={"https://conatto.github.io"}>
                                            <strong className="has-text-success">Saiba Mais</strong>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    );
}

export default Login;
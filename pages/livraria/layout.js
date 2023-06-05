import Head from "next/head";
import { NavMenu, Footer, Section } from "../../components";

const Layout = ({ name, children }) => {
    return (
        <>
            <Head>
                <meta name="robots" content={`${name}, follow`} />
                <meta name="author" content="Conatto" />
                <meta name="description" content="Um exemplo de uma aplicação web para venda de livros" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
                <title>{`Livraria Virtual - ${name}`}</title>
            </Head>
            <NavMenu />
            <Section>
                {children}
            </Section>
            <Footer />
        </>
    )
}

export default Layout;
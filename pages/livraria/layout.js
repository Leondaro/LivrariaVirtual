import Head from "next/head";
import { BookContextProvider } from "../../contexts/BookContext";
import { NavMenu, Footer } from "../../components";
import { Section, Level } from "rbx";

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
            <header>
                <NavMenu />
            </header>
            <BookContextProvider>
                <Section className="translucid-grey border-top-burgundy border-bottom-burgundy">
                    <Level className="justify-content">
                        {children}
                    </Level>
                </Section>
            </BookContextProvider>
            <Footer />
        </>
    )
}

export default Layout;
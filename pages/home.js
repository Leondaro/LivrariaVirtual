import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import CollectionCards from "../components/CollectionCards";

function Home() {
    //Dados retornados de uma consulda devem ser enviados
    //para o componente CollectionCards.
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
                <CollectionCards />
            </Section>
            <Footer />
        </>
    );
}

export default Home;
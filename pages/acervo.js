import { NavMenu, Footer, Section, SectionTitle, Pagination } from "../components";

function Acervo() {
    return (
        <>
            <div>
                <meta name="robots" content="Acervo, follow" />
                <meta name="author" content="Conatto" />
                <meta name="description" content="Site sobre..." />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
                <title>Livraria Virtual - Acervo</title>
            </div>
            <header>
                <NavMenu />
            </header>
            <Section aside="true">
                <SectionTitle title="Acervo" />

                <Pagination />
            </Section>
            <Footer />
        </>
    )
}

export default Acervo;
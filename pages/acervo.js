import { NavMenu, Footer, Section, SectionTitle, CardPlaceholder, Pagination } from "../components";

function Acervo() {
    const cols = [0, 1, 2, 3]
    
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
                <div className="card-columns">
                    {cols.map(col => {
                        return (
                            <CardPlaceholder key={col} />
                        )
                    })}
                </div>
                <Pagination />
            </Section>
            <Footer />
        </>
    )
}

export default Acervo;
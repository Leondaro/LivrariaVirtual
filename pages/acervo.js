import { NavMenu, Footer, Section, SectionTitle, CardPlaceholder, Pagination, AsideMenu } from "../components";

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
            <NavMenu />
            <Section>
                <div className="breakpoint-wrapper">
                    <AsideMenu />
                    <div className="home-columns">
                        <div className="column is-narrow pt-0">
                            <div className="box">
                                <SectionTitle><span className="padding-title">Acervo</span></SectionTitle>
                                <div className="card-columns">
                                    {cols.map(col => {
                                        return (
                                            <CardPlaceholder key={col} />
                                        )
                                    })}
                                </div>
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />
        </>
    )
}

export default Acervo;
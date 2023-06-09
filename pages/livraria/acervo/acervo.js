import { SectionTitle, CardPlaceholder, Pagination, AsideMenu } from "../../../components";
import { Box, Column, Generic } from "rbx";
import Layout from "../layout";


function Acervo() {
    const cols = [0, 1, 2, 3]
    const categories = [
        "Romance",
        "Contos e Crônicas",
        "Autoajuda",
        "Ficção Científica",
        "Finanças",
        "Astronomia",
        "Política",
        "Gestão",
        "Física",
        "Negócios",
        "Economia",
        "Literatura infantil",
        "Psicologia",
        "Quadrinhos",
        "Administração",
        "Ensaios",
        "Desenvolvimento Pessoal",
        "Cursos de Inglês",
        "Dicionários Técnicos",
        "Literatura Juvenil",
        "Diversos"
    ]
    
    return (
        <Layout name={"Acervo"}>
            <Generic className="breakpoint-wrapper">
                <AsideMenu>{categories}</AsideMenu>
                <Generic className="home">
                    <Column narrow={true}>
                        <Box>
                            <SectionTitle>Acervo</SectionTitle>
                            <Generic className="card-columns">
                                {cols.map(col => {
                                    return (
                                        <Column key={col}>
                                            <Generic className="box-card">
                                                <CardPlaceholder />
                                            </Generic>
                                        </Column>
                                    )
                                })}
                            </Generic>
                            <Pagination />
                        </Box>
                    </Column>
                </Generic>
            </Generic>
        </Layout>
    )
}

export default Acervo;
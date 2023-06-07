import { Box, Column, Generic } from "rbx";
import { SectionTitle, CardPlaceholder, Pagination, AsideMenu } from "../../../components";
import Layout from "../layout";


function Acervo() {
    const cols = [0, 1, 2, 3]
    
    return (
        <Layout name={"Acervo"}>
            <Generic className="breakpoint-wrapper">
                <AsideMenu />
                <Generic className="home">
                    <Column narrow={true}>
                        <Box>
                            <SectionTitle><span className="padding-title">Acervo</span></SectionTitle>
                            <Generic className="card-columns">
                                {cols.map(col => {
                                    return (
                                        <CardPlaceholder key={col} />
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
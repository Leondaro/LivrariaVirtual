import { FilterContextProvider } from "../../../contexts/FilterContext";
import { filterList } from "../../../utils/filterList";
import { SectionTitle, Pagination, AsideMenu, CardColumns, CardPlaceholder } from "../../../components";
import { Box, Column, Generic } from "rbx";
import Layout from "../layout";


function Acervo() {
    const categories = filterList;    
    
    return (
        <Layout name={"Acervo"}>
            <Generic className="breakpoint-wrapper">
                <FilterContextProvider>
                    <AsideMenu>
                        {categories}
                    </AsideMenu>
                    <Generic className="home">
                        <Column narrow={true}>
                            <Box>
                                <SectionTitle>Acervo</SectionTitle>
                                    <CardColumns>
                                        <CardPlaceholder />
                                    </CardColumns>
                                <Pagination />
                            </Box>
                        </Column>
                    </Generic>
                </FilterContextProvider>
            </Generic>
        </Layout>
    )
}

export default Acervo;
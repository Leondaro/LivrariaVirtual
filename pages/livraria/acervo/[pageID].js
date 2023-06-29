import { FilterContextProvider } from "../../../contexts/FilterContext";
import { PaginationContextProvider } from "../../../contexts/PaginationContext";
import { filterList } from "../../../utils/filterList";
import { SectionTitle, Pagination, AsideMenu, CardList, CardPlaceholder, CollectionViewer } from "../../../components";
import { Box, Column, Generic } from "rbx";
import Layout from "../layout";


function Acervo() {
    const categories = filterList;    
    
    return (
        <Layout name={"Acervo"}>
            <Generic className="breakpoint-wrapper">
                <FilterContextProvider>
                    <PaginationContextProvider>
                        <AsideMenu>
                            {categories}
                        </AsideMenu>
                        <Generic className="home">
                            <Column narrow={true}>
                                <Box>
                                    <SectionTitle>Acervo</SectionTitle>
                                        <CollectionViewer>
                                            <CardList>
                                                <CardPlaceholder />
                                            </CardList>
                                        </CollectionViewer>
                                    <Pagination />
                                </Box>
                            </Column>
                        </Generic>
                    </PaginationContextProvider>
                </FilterContextProvider>
            </Generic>
        </Layout>
    )
}

export default Acervo;
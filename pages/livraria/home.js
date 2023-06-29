import { SectionTitle, CardList, CardPlaceholder, HomeViewer } from "../../components";
import { Generic, Box, Column } from "rbx";
import Layout from "./layout";
import { FilterContextProvider } from "../../contexts/FilterContext";


function Home() {
    return (
        <Layout name={"Home"}>
            <FilterContextProvider>
                <Generic className="home">
                    <Column narrow={true}>
                        <Box>
                            <SectionTitle>Populares</SectionTitle>
                            <HomeViewer>
                                <CardList>
                                    <CardPlaceholder />
                                </CardList>
                            </HomeViewer>
                        </Box>
                    </Column>
                </Generic>
            </FilterContextProvider>
        </Layout>
    );
}

export default Home;
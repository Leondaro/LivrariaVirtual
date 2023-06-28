import { SectionTitle, CardList, CardPlaceholder } from "../../components";
import { Generic, Box, Column } from "rbx";
import Layout from "./layout";


function Home() {
    return (
        <Layout name={"Home"}>
            <Generic className="home">
                <Column narrow={true}>
                    <Box>
                        <SectionTitle>Populares</SectionTitle>
                        <CardList>
                            <CardPlaceholder />
                        </CardList>
                    </Box>
                </Column>
            </Generic>
        </Layout>
    );
}

export default Home;
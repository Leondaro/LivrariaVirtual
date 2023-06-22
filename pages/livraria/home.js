import { SectionTitle, CardColumns, CardPlaceholder } from "../../components";
import { Generic, Box, Column } from "rbx";
import Layout from "./layout";


function Home() {
    return (
        <Layout name={"Home"}>
            <Generic className="home">
                <Column narrow={true}>
                    <Box>
                        <SectionTitle>Populares</SectionTitle>
                        <CardColumns>
                            <CardPlaceholder />
                        </CardColumns>
                    </Box>
                </Column>
            </Generic>
        </Layout>
    );
}

export default Home;
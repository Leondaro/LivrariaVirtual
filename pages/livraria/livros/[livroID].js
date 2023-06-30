import { BackButton, SectionProduct } from "../../../components";
import { Generic, Box, Level, Column } from "rbx";
import Layout from "../layout";


function Livros() {
    return(
        <Layout name={"Descrição do Livro"}>
            <Generic className="home">
                <Column>
                    <Box className="default-width">
                        <Level className="space-between">
                            <BackButton />
                        </Level>
                        <Level>
                            <SectionProduct/>
                        </Level>
                    </Box>
                </Column>
            </Generic>
        </Layout>
    )
}

export default Livros;
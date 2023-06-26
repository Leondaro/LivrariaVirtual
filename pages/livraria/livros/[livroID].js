import { SectionProduct } from "../../../components";
import { Generic, Box, Level, Column, Button, Icon } from "rbx";
import Layout from "../layout";
import Link from "next/link";


function Livros() {
    return(
        <Layout name={"Descrição do Livro"}>
            <Generic className="home">
                <Column>
                    <Box className="default-width">
                        <Level className="space-between">
                            <Link href={"/livraria/home"}>
                                <Button color={"info"} outlined={true}>
                                    <Icon>
                                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                    </Icon>
                                    <Generic as="span">Voltar</Generic>
                                </Button>
                            </Link>
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
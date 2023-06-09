import MenuBurger from "./MenuBurger";
import NavTag from "./NavTag";
import Img from "next/image";
import Link from "next/link";
import { Container, Highlight, Image, Level, Navbar } from "rbx";


function NavMenu() {
    return (
        <Navbar className="border-bottom-burgundy">
            <Container>
                <Level.Item>
                    <Link href={"home"}>
                        <Image.Container className="menu-logo">
                            <Img src={"/_img/LivrariaLogo.png"} width={128} height={64} alt="Logotipo" />
                        </Image.Container>
                    </Link>
                </Level.Item>
            </Container>

            <MenuBurger targetEl={"mainMenu"} />
            <Navbar.Menu id="mainMenu">
                <Navbar.Segment align="right">
                    <Level marginless={true}>
                        <Navbar.Item as="div">
                            <NavTag>Bem-vindo, Visitante!</NavTag>
                        </Navbar.Item>
                        <Navbar.Item href={"/livraria/home"}>
                            <Highlight textColor="white" textWeight="bold">
                                Home
                            </Highlight>
                        </Navbar.Item>
                        <Navbar.Item href={"/livraria/acervo/acervo"}>
                            <Highlight textColor="white" textWeight="bold">
                                Acervo
                            </Highlight>
                        </Navbar.Item>
                        <Navbar.Item href={"/"}>
                            <Highlight textColor="white" textWeight="bold">
                                Sair
                            </Highlight>
                        </Navbar.Item>
                    </Level>
                </Navbar.Segment>
            </Navbar.Menu>
        </Navbar>
    );
}

export default NavMenu;
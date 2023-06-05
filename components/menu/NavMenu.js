import MenuBurger from "./MenuBurger";
import NavTag from "./NavTag";
import NavLink from "./NavLink";
import Figure from "../utilities/Figure";
import Image from "next/image";
import Link from "next/link";


function NavMenu() {
    return (
        <header>
            <nav className="navbar border-bottom-burgundy">
                <div className="container">
                    <div className="level-item">
                        <Link href={"home"}>
                            <Figure css={"image menu-logo"} >
                                <Image src={"/_img/LivrariaLogo.png"} width={128} height={64} alt="Logotipo" />
                            </Figure>
                        </Link>
                    </div>
                </div>

                <MenuBurger targetEl={"mainMenu"} />
                <div id="mainMenu" className="navbar-menu navbar-end level-item">
                    <div className="is-flex">
                        <div className="columns is-marginless">
                            <div className="navbar-item">
                                <NavTag text={"Bem-vindo, Visitante!"} />
                            </div>
                            <div className="navbar-item">
                                <NavLink href={"home"} color={"is-info"}>Home</NavLink>
                            </div>
                            {/*
                        <div className="navbar-item">
                            <NavLink href={"acervo"} color={"is-info"}>Acervo</NavLink>
                        </div>
                        */}
                            <div className="navbar-item">
                                <NavLink href={"/"} color={"is-primary"}>Sair</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavMenu;
import MenuBurger from "./MenuBurger";

function AsideMenu() {
    return(
        <>
            <div className="column is-2 pt-0">
                <aside className="menu box">
                    <div className="navbar-brand level is-marginless">
                        <div className="level-item  is-marginless">
                            <p className="menu-label has-text-info">
                                Categorias
                            </p>
                        </div>
                        <MenuBurger targetEl={"asideMenu"} />
                    </div>
                    <div id="asideMenu" className="navbar-menu">
                        <ul className="menu-list">
                            <li><a>Romance</a></li>
                            <li><a>Contos e Crônicas</a></li>
                            <li><a>Autoajuda</a></li>
                            <li><a>Ficção Científica</a></li>
                            <li><a>Finanças</a></li>
                            <li><a>Astronomia</a></li>
                            <li><a>Política</a></li>
                            <li><a>Gestão</a></li>
                            <li><a>Física</a></li>
                            <li><a>Negócios</a></li>
                            <li><a>Economia</a></li>
                            <li><a>Literatura infantil</a></li>
                            <li><a>Psicologia</a></li>
                            <li><a>Quadrinhos</a></li>
                            <li><a>Administração</a></li>
                            <li><a>Ensaios</a></li>
                            <li><a>Desenvolvimento Pessoal</a></li>
                            <li><a>Cursos de Inglês</a></li>
                            <li><a>Dicionários Técnicos</a></li>
                            <li><a>Literatura Juvenil</a></li>
                            <li><a>Diversos</a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default AsideMenu;
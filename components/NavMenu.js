function NavMenu() {
    return (
        <nav className="navbar is-framed-bottom-burgundy">
            <div className="container">
                <div className="level-item">
                    <figure className="image is-default-logo ml-4 mb-2">
                        <a href="home"><img src="_img/LivrariaLogo.png" /></a>
                    </figure>
                </div>
            </div>

            <div className="navbar-end level-item">
                <div className="level is-mobile">
                    <div className="level-item level-right">
                        <div className="navbar-item">
                            <span className="tag is-rounded is-small"><strong>Bem-vindo,
                                Visitante!</strong></span>
                        </div>
                        <div className="navbar-item">
                            <a href="home" className="button is-info is-outlined">
                                Home
                            </a>
                        </div>
                        <div className="navbar-item">
                            <a href="acervo" className="button is-info is-outlined">
                                Acervo
                            </a>
                        </div>
                        <div className="navbar-item">
                            <a href="/" className="button is-primary is-outlined">
                                Sair
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavMenu;
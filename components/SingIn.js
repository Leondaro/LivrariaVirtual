function SingIn() {
    return (
        <section className="section level">
            <div className="level-item">
                <div className="mt-8 column is-4">
                    <div className="box is-framed-burgundy">
                        <div className="column level">
                            <div className="level-item">
                                <figure className="image is-index-logo mb-6">
                                    <a href="/"><img id="logo" src="_img\LivrariaLogo.png" /></a>
                                </figure>
                            </div>
                            <div className="level-item is-mobile">

                                <form id="login" onSubmit>
                                    <div id="mensagem">

                                    </div>
                                    <div className="block">
                                        <div className="field">
                                            <div className="control has-icons-left">
                                                <input className="input" type="email" name="usuario" placeholder="E-mail" defaultValue="Visitante" readonly />
                                                <span className="icon is-left">
                                                    <i className="fa fa-envelope"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="block">
                                        <div className="field">
                                            <div className="control has-icons-left">
                                                <input className="input" type="password" name="senha" placeholder="Senha" defaultValue="visitante" readonly />
                                                <span className="icon is-left">
                                                    <i className="fa fa-lock"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 ml-3 mr-3">
                                        <div className="block level is-mobile">
                                            <input className="level-item button is-link is-outlined"
                                                id="btLogar" type="submit" defaultValue="Login" />
                                        </div>
                                        <div className="block level is-mobile">
                                            <input className="level-item button is-success is-outlined"
                                                id="btCadastrar" type="button" defaultValue="Cadastro" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}

export default SingIn;
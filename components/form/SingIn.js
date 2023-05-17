import EmailField from "./EmailField";
import PasswordField from "./PasswordField";

function SingIn({ emailValue , passwordValue, handleHref }) {
    return (
        <>
            <form id="login">
                <div id="mensagem"></div>
                <EmailField email={emailValue} />

                <PasswordField PasswordField={passwordValue} />
                <div className="mt-6 ml-3 mr-3">
                    <div className="block level is-mobile">
                        <button className="level-item button is-link is-outlined"
                            id="btLogar" type="button" onClick={handleHref} >Login
                        </button>
                    </div>
                    <div className="block level is-mobile">
                        <button className="level-item button is-success is-outlined"
                            id="btCadastrar" type="button" defaultValue="Cadastro">Cadastro
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default SingIn;
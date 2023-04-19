function PasswordField({ password }) {
    return (
        <div className="block">
            <div className="field">
                <div className="control has-icons-left">
                    <input className="input" type="password" name="senha" /*placeholder={ password }*/ defaultValue="Visitante" readOnly />
                    <span className="icon is-left">
                        <i className="fa fa-lock"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PasswordField;
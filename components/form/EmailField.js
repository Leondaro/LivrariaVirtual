function EmailField({ email }) {
    return (
        <div className="block">
            <div className="field">
                <div className="control has-icons-left">
                    <input className="input" type="email" name="usuario" /*placeholder={email}*/ defaultValue="Visitante" readOnly />
                    <span className="icon is-left">
                        <i className="fa fa-envelope"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default EmailField;
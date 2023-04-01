function SubmitButton({ onClick, e }) {
    return (
        <>
            <div className="field mb-5">
                <div className="control">
                    <div className="is-block">
                        <div className="is-pulled-right mr-4">
                            <a className="button is-white is-outlined" type="submit" onClick={() => onClick(e)} >
                                <span className="icon is-small">
                                    <i className="fa fa-plus-square"></i>
                                </span>
                                <span>Cadastrar</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubmitButton;
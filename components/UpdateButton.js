function UpdateButton() {
    return (
        <>
            <p className="control">
                <a className="button is-white is-outlined" disabled>
                    <span className="icon is-small">
                        <i className="fa fa-edit"></i>
                    </span>
                    <span>Editar</span>
                </a>
            </p>
        </>
    )
}

export default UpdateButton;
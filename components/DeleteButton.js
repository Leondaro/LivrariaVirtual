function DeleteButton({ onClick }) {
    return (
        <>
            <p className="control">
                <a className="button is-white is-outlined" onClick={() => onClick()} >
                    <span className="icon is-small">
                        <i className="fa fa-trash-alt"></i>
                    </span>
                    <span>Excluir</span>
                </a>
            </p> 
        </>
    )
}

export default DeleteButton;
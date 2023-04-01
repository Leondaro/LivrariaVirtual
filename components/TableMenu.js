function TableMenu({ children }) {
    return (
        <>
            <div className="level">
                <div className="column">
                    <div className="level-item">
                        <div className="field has-addons">
                            {children}
                            <p className="control">
                                <input className="input" placeholder="Livro" disabled />
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TableMenu;
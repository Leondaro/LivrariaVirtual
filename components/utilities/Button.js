function button({ id, css, handler, children }) {
    return (
        <button className={css}
            id={id} type="button" onClick={handler} >{children}
        </button>
    )
}

export default button;
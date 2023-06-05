function Figure({ css, children }) {
    return (
        <figure className={css}>
            {children}
        </figure>
    )
}

export default Figure;
function Figure({ css, srcImage }) {
    return (
        <figure className={css}>
            <img src={srcImage} />
        </figure>
    )
}

export default Figure;
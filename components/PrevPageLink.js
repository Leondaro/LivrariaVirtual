const PrevPageLink = ({currentPage}) => {
    return (
        <li><a className="pagination-link" aria-label="Goto page">
            <span><strong>{currentPage-1}</strong></span>
        </a></li>
    )
}

export default PrevPageLink;
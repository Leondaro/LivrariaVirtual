const CurrentPageLink = ({currentPage}) => {
    return (
        <li><a className="pagination-link" aria-label="Goto page">
            <span><strong>{currentPage}</strong></span>
        </a></li>
    )
}

export default CurrentPageLink;
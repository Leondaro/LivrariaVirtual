const LastPageLink = ({lastPage}) => {
    return (
        <li><a className="pagination-link" aria-label="Goto page">
            <span><strong>{lastPage}</strong></span>
        </a></li>
    )
}

export default LastPageLink;
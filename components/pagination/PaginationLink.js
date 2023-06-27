import { Highlight, Pagination } from "rbx";

const PaginationLink = ({ current, handleNavigation, children }) => {
    return (
        <Pagination.Link className={current && "is-current"} onClick={handleNavigation}>
            <Highlight as="span" textWeight="bold">{children}</Highlight>
        </Pagination.Link>
    )
}

export default PaginationLink;
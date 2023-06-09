import { Highlight, Pagination } from "rbx";

const PaginationLink = ({ current, children }) => {
    return (
        <Pagination.Link className={current ? "is-current" : null}>
            <Highlight as="span" textWeight="bold">{children}</Highlight>
        </Pagination.Link>
    )
}

export default PaginationLink;
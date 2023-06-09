import { Button, Pagination } from "rbx";

const PaginationStep = ({ children }) => {
    return (
        <Pagination.Step className="padding-line" aria-label="Goto page">
            <Button color={"white"} outlined={true}>
                {children}
            </Button>
        </Pagination.Step>
    )
}

export default PaginationStep;
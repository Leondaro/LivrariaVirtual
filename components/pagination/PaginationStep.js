import { Button, Pagination } from "rbx";

const PaginationStep = ({ handleNavigation, children }) => {
    return (
        <Pagination.Step align="center" className="padding-line" aria-label="Goto page">
            <Button color={"white"} outlined={true} onClick={handleNavigation}>
                {children}
            </Button>
        </Pagination.Step>
    )
}

export default PaginationStep;
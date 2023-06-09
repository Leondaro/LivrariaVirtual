import { Level, Pagination } from "rbx";
import PaginationStep from "./PaginationStep";
import PaginationLink from "./PaginationLink";
import Ellipsis from "./Ellipsis";


function PaginationStruct() {
    const firstPage = 1;
    const lastPage = 12;
    let currentPage = 1;
    
    return (
      <Level>
        <Level.Item>
          <Pagination align="center" role="navigation" aria-label="pagination">
            <Pagination.List>
              {currentPage > firstPage ? <PaginationStep>Anterior</PaginationStep> : null}
              {firstPage < currentPage ? <PaginationLink>{firstPage}</PaginationLink> : null} 
              {currentPage >= 4 ? <Ellipsis /> : null}            

              {currentPage-1 > firstPage ? <PaginationLink>{currentPage-1}</PaginationLink> : null}
              {(currentPage >= firstPage) && (currentPage <= lastPage) ? <PaginationLink current={true}>{currentPage}</PaginationLink> : null}
              {currentPage+1 <= lastPage ? <PaginationLink>{currentPage+1}</PaginationLink> : null}

              {currentPage+1 < lastPage-1 ? <Ellipsis /> : null}
              {lastPage >= (currentPage+2) ? <PaginationLink>{lastPage}</PaginationLink> : null}
              {currentPage < lastPage ? <PaginationStep>Próximo</PaginationStep> : null}
            </Pagination.List>
          </Pagination>
        </Level.Item>
      </Level>
    )
}

export default PaginationStruct;
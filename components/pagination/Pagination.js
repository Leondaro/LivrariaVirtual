import { useBooks } from "../../hooks/useBooks";
import { useFilter } from "../../hooks/useFilter";
import { usePagination } from "../../hooks/usePagination";
import { Level, Pagination } from "rbx";
import PaginationStep from "./PaginationStep";
import PaginationLink from "./PaginationLink";
import Ellipsis from "./Ellipsis";
import router from "next/router";


function PaginationStruct() {
    const { amountPages, updateBooks } = useBooks();
    const { currentPage, updatePage } = usePagination();
    const { type } = useFilter();
    const firstPage = 1;
    const lastPage = amountPages;
    

    const handlePageNavigation = async (page) => {
      await updateBooks({ queryFilter: type, pageIndex: page-1 });
      updatePage(page);
      router.push(`/livraria/acervo/${page}`)
    }
    
    return (
      <Level>
        <Level.Item>
          <Pagination align="center" role="navigation" aria-label="pagination">
            <Pagination.List>
              {currentPage > firstPage && <PaginationStep handleNavigation={() => handlePageNavigation(currentPage-1)} >Anterior</PaginationStep>}
              {firstPage < currentPage && <PaginationLink handleNavigation={() => handlePageNavigation(firstPage)} >{firstPage}</PaginationLink>} 
              {currentPage > firstPage+2 && <Ellipsis />}            

              {currentPage-1 > firstPage && <PaginationLink handleNavigation={() => handlePageNavigation(currentPage-1)} >{currentPage-1}</PaginationLink>}
              {(currentPage >= firstPage) && (currentPage <= lastPage) && <PaginationLink current={true} >{currentPage}</PaginationLink>}
              {currentPage+1 <= lastPage && <PaginationLink handleNavigation={() => handlePageNavigation(currentPage+1)} >{currentPage+1}</PaginationLink>}

              {currentPage < lastPage-2 && <Ellipsis />}
              {lastPage >= (currentPage+2) && <PaginationLink handleNavigation={() => handlePageNavigation(lastPage)} >{lastPage}</PaginationLink>}
              {currentPage < lastPage && <PaginationStep handleNavigation={() => handlePageNavigation(currentPage+1)} >Próximo</PaginationStep>}
            </Pagination.List>
          </Pagination>
        </Level.Item>
      </Level>
    )
}

export default PaginationStruct;
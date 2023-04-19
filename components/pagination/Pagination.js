import PrevPageButton from "./PrevPageButton";
import NextPageButton from "./NextPageButton";
import Ellipsis from "./Ellipsis";
import PrevPageLink from "./PrevPageLink";
import CurrentPageLink from "./CurrentPageLink";
import NextPageLink from "./NextPageLink";
import LastPageLink from "./LastPageLink";

function Pagination() {
    let currentPage = 1;
    let totalPages = 12;
    
    return (
        <div className="level">
              <div className="level-item">
                <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                    {currentPage > 1 ? <PrevPageButton /> : null}
                  <ul className="pagination-list">
                    <li><a className="pagination-link is-current" aria-label="Page 01" aria-current="page">
                      <span><strong>1</strong></span>
                    </a></li>
                    {currentPage >= 4 ? <Ellipsis /> : null}                    
                    {currentPage-1 > 1 ? <PrevPageLink currentPage={currentPage}/> : null}
                    {(currentPage > 1) && (currentPage <= totalPages) ? <CurrentPageLink currentPage={currentPage} /> : null}
                    {currentPage+1 <= totalPages ? <NextPageLink currentPage={currentPage} /> : null}
                    {currentPage+1 < totalPages-1 ? <Ellipsis /> : null}
                    {totalPages >= (currentPage+2) ? <LastPageLink lastPage={totalPages} /> : null}
                    {currentPage < totalPages ? <NextPageButton /> : null}
                  </ul>
                </nav>
              </div>
            </div>
    )
}

export default Pagination;
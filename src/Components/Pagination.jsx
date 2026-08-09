import "../css/Pagination.css";

const Pagination = ({resultPerPage, totalResult, currentPage, setCurrentPage}) => {
    const totalPages = Math.ceil(totalResult / resultPerPage)
    const pageNumbers = []
 for(let i = 1; i <= totalPages; i++ ){
        pageNumbers.push(i)
    }
    let mappedResultSlice = pageNumbers.map((number)=>(
      <li key={number}>
        <button
         onClick = {
               ()=> setCurrentPage(number)
            }
         className= {`page-btn${number === currentPage ? " page-btn--active": ""}`}
          type="button"
           >
           
          {number}
        </button>
      </li>
    ))

  if (totalPages <= 1) return null

  return (
    <nav className="pagination">
      <ul className="pagination__list">
        <li>
          <button
            type="button"
            className="page-btn page-btn--arrow"
            aria-label="Previous page"
            disabled={currentPage === 1}
            onClick={()=>setCurrentPage(currentPage - 1)}
            
          >
            &#8592;
          </button>
        </li>

        {mappedResultSlice}

        <li>
          <button
            type="button"
            className="page-btn page-btn--arrow"
            aria-label="Next page"
            disabled= {currentPage === totalPages}
           onClick={()=>setCurrentPage(currentPage + 1)}
          >
            &#8594;
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination

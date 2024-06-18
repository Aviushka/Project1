import React from 'react'

interface Paginationprops {
    gotoNextPage: () => void;
    gotoPrevPage: () => void;
    gotoFirstPage: () => void;
    gotoLastPage: () => void;
}

const Pagination: React.FC<Paginationprops> = ({ gotoNextPage, gotoPrevPage, gotoFirstPage, gotoLastPage}) => {
  return (
    <div>
      {gotoFirstPage && <button name="First" onClick={gotoFirstPage}>First</button>}
      {gotoPrevPage && <button name="Previous" onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button name="Next" onClick={gotoNextPage}>Next</button>}
      {gotoLastPage && <button name="Last" onClick={gotoLastPage}>Last</button>}

    </div>
  )
}

export default Pagination;

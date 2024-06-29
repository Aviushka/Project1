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
      {gotoFirstPage && <button name="first" onClick={gotoFirstPage}>First</button>}
      {gotoPrevPage && <button name="previous" onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button name="next" onClick={gotoNextPage}>Next</button>}
      {gotoLastPage && <button name="last" onClick={gotoLastPage}>Last</button>}

    </div>
  )
}

export default Pagination;

import React from 'react';

const Pagination = ({ pageNumber, handlePrev, handleNext, usersCount, usersPerPage }) => {


  const isPrevDisable = pageNumber > 1;
   
return (
        <div className="pagination">
        <button className="btn" onClick={handlePrev} disabled={!isPrevDisable}>{isPrevDisable && '-' }</button>
        <span className="pagination__page">{pageNumber}</span>
    <button className="btn" onClick={handleNext}>→</button>
  </div>
  )

}

export default Pagination;
import React from 'react'
import './Pagination.css'
function Pagination({booksPerPage,totalBooks,paginate}) {
    const bookNumbers=[];
    for(let i = 1;i <= Math.ceil(totalBooks / booksPerPage);i++){
        bookNumbers.push(i);
    }
  return (
    <nav>
   <ul className='pagination'>
    {bookNumbers.map(number=>
      (<li key={number} className='page-item'>
        <a onClick={()=>paginate(number)}
        href='#' className='page-link'>
            {number}
        </a>

    </li>
    ))}

   </ul>

    </nav>
  )
}

export default Pagination;

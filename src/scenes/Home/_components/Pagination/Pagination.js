/*
onClicked event for the list of pagination, 
this call the paginate method (call this as prop)
*/

import React from 'react'
//actualy there's a module for pagination


const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []; //initialize w/ empty array
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        // use bootstrap markup nav to create page navigation
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={()=> paginate(number)} className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
            
        </nav>
    )
}

export default Pagination
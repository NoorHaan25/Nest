import React from 'react'
import styles from './Pagination.module.css'
export default function Pagination({pages , setCurrentPage , currentPage}) {
  console.log(pages);
  const generatedPages = []
  for (let i = 0; i <= pages; i++) {
    generatedPages.push(i+1)
  }
  const clickHandler = (pageNum) => {
    setCurrentPage(pageNum)
    window.scrollTo(0, 0);

  }
  return (
    <div className={styles['pagination']}>
    <ul>{generatedPages.map((pageNum)=> <li key={pageNum} className={`${currentPage === pageNum ? styles['active'] : null}`} onClick={()=>{ clickHandler(pageNum)}}>{pageNum}</li>)}</ul>
    </div>
  )
}

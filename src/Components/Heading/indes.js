import React from 'react'
import styles from './Heading.module.css'

export default function Heading({heading}) {
  return (
    <div className={styles.Heading}>
      <h2>{heading}</h2>
    </div>
  )
}

import React from 'react'
import styles from './InvalidInput.module.css'
export default function InvalidInput({post}) {
  return (
    <div className={styles.invalid}>
     <p>{post}</p>
    </div>
  )
}

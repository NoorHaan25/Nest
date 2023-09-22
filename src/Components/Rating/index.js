import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Rating.module.css'
import React from 'react'

export default function Rating() {
  const rating = <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>;
  return (
    <div className={styles.rating}>
    {Array(5).fill(rating)}
  </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Link.module.css'
export default function LinkButton(props) {
  return (
    <Link className={styles.button}>{props.text}</Link>
  )
}

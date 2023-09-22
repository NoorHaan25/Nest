import React from 'react'
import styles from './Logo.module.css'
import LogoImg from '../../img/logo.png'
export default function Logo({logoStyle}) {
  return (
    <div className={styles[logoStyle]}><img src={LogoImg} alt=''/></div>
  )
}
 
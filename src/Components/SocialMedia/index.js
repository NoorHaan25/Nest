import { faFacebook, faInstagram, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SocialMedia.module.css'
import React from 'react'

export default function SocialMedia() {
  return (
    <div className={styles['social-media']}>
    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
    <FontAwesomeIcon icon={faSkype}></FontAwesomeIcon>
    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
  </div>
  )
}

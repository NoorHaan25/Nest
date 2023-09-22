import React from 'react'
import styles from './User.module.css'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
export default function User() {
  const userName = useSelector((state) => state.user);
  console.log('loginNav' , userName);
  return (
    <div className={styles['user']}>
              <img src={require('../../img/user.png')} alt="user"/>
              <div className={styles['userName']}>
              <span>{Object.keys(userName).length === 0 ? <Link to={'./signup'}>Join</Link>: userName.userName }</span>
              </div>
            </div>
  )
}

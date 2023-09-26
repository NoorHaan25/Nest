import React, { useState } from 'react'
import styles from "./SignUp.module.css"
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { useDispatch, useSelector } from 'react-redux';
import { signUsers } from '../../rtk/slices/signUp';
import {useNavigate} from 'react-router-dom'
export default function SignUp() {
  const users = useSelector((state)=>state.user)
  //console.log('users' , users);
  const dispatch = useDispatch()
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState(true);
  const navigate=useNavigate();
  function onSubmitHandler(e) {
    e.preventDefault();
    if(password == repeatPassword){
    dispatch(signUsers(
      {
        userName,
        email,
        password,
        repeatPassword
      }
    ))
   navigate('/login')
    }else {
      setCheckPassword(false)
    }
  }
  return (
    <div className={styles["signup"]}>
      <Container>
        <div className={styles["signup-heading"]}>
          <h1>Sign Up</h1>
        </div>
        <Row className="justify-content-center">
          <Col lg={8}>
            <form onSubmit={onSubmitHandler}>
              <div className={styles['wrapper-input']}>
                <label htmlFor="userName">Username
                <span>*</span></label>
                <input id="userName" type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} required/>
              </div>
              <div className={styles['wrapper-input']}>
                <label htmlFor="email">Email
                <span>*</span></label>
                <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
              </div>
              <div  className={styles['wrapper-input']}>
                <label htmlFor="password">Password<span>*</span></label>
                  <input id="password" type="password" value={password} className={checkPassword ? null : styles['check-password']} onChange={(e)=>setPassword(e.target.value)} required/>
              </div>
              
              <div  className={styles['wrapper-input']}>
                <label htmlFor="repeat-password">Repeat Password<span>*</span></label>
                  <input id="repeat-password" type="password" value={repeatPassword} className={checkPassword ? null : styles['check-password']} onChange={(e)=>setrepeatPassword(e.target.value)} required/>
                  {checkPassword ? null : <div className={styles['text-check-password']}>Password don't match</div>}
                  </div>
              
              <input type="submit" value={'Sign Up'}/>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

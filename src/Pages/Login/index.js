import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../services/api";
import { getUser } from "../../rtk/slices/usersSlice";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [checkPassword, setCheckPassward] = useState(true);
  const loginUser = useSelector((state) => state.user);
  console.log("login", loginUser);
  const navigate = useNavigate();
  const fetchUsers = async () => {
    const response = await getUserInfo();
    // console.log("response", response.data);
    setUsers(response.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  function onSubmitHandler(e) {
    e.preventDefault();
      const checkEmail = users.find((user) => user.email === email);
      const checkPassword = users.find((user) => user.password === password);
      if (checkEmail) {
        if (checkPassword) {
          navigate('/')
          dispatch(getUser(checkEmail));
        } else {
          setCheckPassward(false);
        }
      } else {
        return null;
      }
  }
  return (
    <div className={styles["login"]}>
      <Container>
        <div className={styles["login-heading"]}>
          <h1>Login</h1>
        </div>
        <Row className="justify-content-center">
          <Col lg={8}>
            <form onSubmit={onSubmitHandler}>
              <div className={styles["wrapper-input"]}>
                <label htmlFor="email">
                  Email
                  <span>*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className={styles["wrapper-input"]}>
                <label htmlFor="password">
                  Password<span>*</span>
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  className={`${checkPassword ? null : styles["checkInputPassword"]}`}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {checkPassword ? null : <div className={styles['checkPassword']}>Password is incorrect</div>}
              </div>
              <input type="submit" value={"Log in"} />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import styles from "./NavbarMiddle.module.css";
import Logo from "../Logo";
import SearchProducts from "../SearchProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Cart from "../Cart";
import User from "../User";
export default function NavbarMiddle() {
  const [toggle, setToggle] = useState(false);
  const cart = useSelector((state) => state.cart);
  const whishlist = useSelector((state) => state.whishlist);
  
  function whishlistLength() {
    let totalCount = 0;
    for (const item of whishlist) {
      totalCount += item.count;
    }
    console.log(totalCount);
    return totalCount;
  }
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <section className={styles["navbar-middle"]}>
      <Container fluid>
        <Row className="align-items-center">
          <Col lg={2}>
            <Logo logoStyle={"logoStyle"} />
          </Col>
          <Col lg={2}>
            <User/>
          </Col>
          <Col lg={4}>
            <SearchProducts />
          </Col>
          <Col lg={4}>
            <div className={styles["icons-section"]}>
              <Cart cartName='cart-big-screen'/>
              <div className={styles["icon-section"]}>
                <Link to={whishlist.length === 0 ? null : "/whishlist"} state={cart}>
                  <div className={styles["wrapper-icon"]}>
                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>{" "}
                    <span className={styles.counter}>{whishlistLength()}</span>
                  </div>
                  <span>Wishlist</span>
                </Link>
              </div>
              <div className={styles["icon-section"]}>
                <Link to={"/"}>
                  <div className={styles["wrapper-icon"]}>
                    <FontAwesomeIcon icon={faArrowsRotate}></FontAwesomeIcon>
                    <span className={styles.counter}>0</span>
                  </div>
                  <span>Compare</span>
                </Link>
              </div>
              <div className={styles["icon-section"]} onClick={()=>toggleHandler()}>
            
                  <div className={styles["wrapper-icon"]}>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    <span>Account</span>
                  </div>
               
                <div className={`${toggle ? styles['show'] : styles['hide']  } ${styles['account']}`}>
                  <Link to={'./login'}>Log In</Link>
                  <Link to={'./signup'}>Sign Up</Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

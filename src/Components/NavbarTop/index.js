import styles from "./NavbarTop.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
export default function NavbarTop() {
  return (
    <section className={styles["navbar-top"]}>
      <Container fluid>
          <div className={styles["big-screen"]}>
          <Row>
            <Col className="col-lg-4">
              <ul className={styles.links}>
                <li>
                  <Link to={"about"}>About Us</Link>
                </li>
                <li>
                  <Link to={""}>My Account</Link>
                </li>
                <li>
                  <Link to={""}>Whilist</Link>
                </li>
                <li>
                  <Link to={""}>Order Tracking</Link>
                </li>
              </ul>
            </Col>
            <Col className="col-lg-4">
              <div className={styles.news}>
                <span>Supper Value Deals - Save more with coupons</span>
              </div>
            </Col>
            <Col className="col-lg-4">
              <div className={styles.call}>
                <span>Need help? Call Us: +1800900122</span>
              </div>
            </Col>
            </Row>
          </div>
          <div className={styles["small-screen"]}>
          <p>Senior’s Member Discount Days! Save 25% Each Tuesday</p>
          </div>
        
      </Container>
    </section>
  );
}
/*<div className={styles['small-screen']}>
       
      </div> */

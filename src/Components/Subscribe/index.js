import React from "react";
import styles from "./Subscribe.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Subscribe() {
  return (
    <section className={styles.subscribe}>
    <div className={styles.layer}></div>
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12} >
            <div className={styles.image}>
              <img src={require("../../img/footer-img-1.png")} alt="footer-1"  />
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} >
            <div className={styles['content-subscribe']}>
              <p>Start You'r Daily Shopping with Nest Mart</p>
              <h2>Stay home & get your daily needs from our shop</h2>
              <div className={styles["input-email"]}>
                <input type="email" placeholder="Your Email Address" />
                <button>Subscribe</button>
              </div>
              <div className={styles.app}>
                <img src={require('../../img/google-play.jpg')} alt="google-play"/>
                <img src={require('../../img/app-store.jpg')} alt="app-store"/>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className={styles.image}>
              <img src={require("../../img/footer-img-2.png")} alt="footer-2" className={styles['footer-2']} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

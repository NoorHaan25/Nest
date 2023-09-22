import React from "react";
import styles from "./Features.module.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
export default function Features() {
  return (
    <section className={styles.features}>
      <Container fluid>
        <Row className="row-cols-xl-5">
        <Col lg={3} md={6} sm={12} >
            <div className={styles.card}>
              <div className={styles["feature-img"]}>
                <img src={require("../../img/icon-1.png")} alt="icon-1" />
              </div>
              <div className={styles["feature-text"]}>
                <h3>Best offers</h3>
                <p>Orders $50 or more</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} >
            <div className={styles.card}>
              <div className={styles["feature-img"]}>
                <img src={require("../../img/icon-2.png")} alt="icon-1" />
              </div>
              <div className={styles["feature-text"]}>
                <h3>Free delivery  </h3>
                <p>24/7 amazing services</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} >
            <div className={styles.card}>
              <div className={styles["feature-img"]}>
                <img src={require("../../img/icon-3.png")} alt="icon-1" />
              </div>
              <div className={styles["feature-text"]}>
                <h3>Great daily deal</h3>
                <p>When you sign up</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} >
            <div className={styles.card}>
              <div className={styles["feature-img"]}>
                <img src={require("../../img/icon-4.png")} alt="icon-1" />
              </div>
              <div className={styles["feature-text"]}>
                <h3>Wide assortment</h3>
                <p>Mega Discounts</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} >
            <div className={styles.card}>
              <div className={styles["feature-img"]}>
                <img src={require("../../img/icon-5.png")} alt="icon-1" />
              </div>
              <div className={styles["feature-text"]}>
                <h3>Easy returns</h3>
                <p>Within 30 days</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

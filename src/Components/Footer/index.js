import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/esm/Container";
import styles from "./Footer.module.css";
import Logo from "../Logo";
import {
  faClock,
  faEnvelope,
  faHeadphones,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container fluid>
        <Row>
          <Col lg={2} md={4} sm={12}>
            <div className={styles.card}>
              <Logo logoStyle={"logoStyle"} />
              <p>Awesome grocery store website template</p>
              <div className={styles.info}>
                <div
                  className={`${styles["info-item"]} d-flex align-items-baseline`}
                >
                  <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                  <div className={styles["info-text"]}>
                    <span>
                      Address 5171 W Campbell Ave undefined Kent, Utah 53127
                      United States
                    </span>
                  </div>
                </div>
                <div
                  className={`${styles["info-item"]} d-flex align-items-baseline`}
                >
                  <FontAwesomeIcon icon={faHeadphones}></FontAwesomeIcon>
                  <div className={styles["info-text"]}>
                    <strong>Call Us</strong>
                    <a href="(+91)-540-025-124553">(+91)-540-025-124553</a>
                  </div>
                </div>
                <div
                  className={`${styles["info-item"]} d-flex align-items-baseline`}
                >
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  <div className={styles["info-text"]}>
                    <strong>Email</strong>
                    <a href="sale@Nest.com">sale@Nest.com</a>
                  </div>
                </div>
                <div
                  className={`${styles["info-item"]} d-flex align-items-baseline`}
                >
                  <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                  <span>Hours 10:00 - 18:00, Mon - Sat</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={2} md={4} sm={12}>
            <div className={styles.card}>
              <h2>Company</h2>
              <ul>
                <li>About Us</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Contact Us</li>
                <li>Support Center</li>
                <li>Careers</li>
              </ul>
            </div>
          </Col>
          <Col lg={2} md={4} sm={12}>
            {" "}
            <div className={styles.card}>
              <h2>Account</h2>
              <ul>
                <li>About Us</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Contact Us</li>
                <li>Support Center</li>
                <li>Careers</li>
              </ul>
            </div>
          </Col>
          <Col lg={2} md={4} sm={12}>
            <div className={styles.card}>
              <h2>Corporate</h2>
              <ul>
                <li>About Us</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Contact Us</li>
                <li>Support Center</li>
                <li>Careers</li>
              </ul>
            </div>
          </Col>
          <Col lg={2} md={4} sm={12}>
            <div className={styles.card}>
              <h2>Popular</h2>
              <ul>
                <li>About Us</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Contact Us</li>
                <li>Support Center</li>
                <li>Careers</li>
              </ul>
            </div>
          </Col>
          <Col lg={2} md={4} sm={12}>
            {" "}
            <div className={styles.card}>
              <h2>Install App</h2>
              <div className={styles.app}>
                <p>From App Store or Google Play</p>
                <div className={styles["img-app"]}>
                  <img
                    src={require("../../img/app-store.jpg")}
                    alt="app-store"
                  />
                  <img
                    src={require("../../img/google-play.jpg")}
                    alt="google-play"
                  />
                </div>
              </div>
              <div className={styles.payment}>
                <p>Secured Payment Gateways</p>
                <img src={require("../../img/payment-method.png")} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

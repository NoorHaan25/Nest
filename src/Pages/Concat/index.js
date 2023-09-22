import React from "react";
import styles from "./Concat.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookBookmark,
  faCalendarTimes,
  faEnvelope,
  faHeadphones,
  faHourglass,
  faHourglassEnd,
  faLocation,
  faLocationDot,
  faParagraph,
  faStopwatch,
  faSwatchbook,
  faTimes,
  faTimesCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Concat() {
  return (
    <>
      <section className={styles["concat"]}>
        <Container>
          <div className={styles["title"]}>
            <h1>How can help you ?</h1>
            <p>Let us know how we can help you</p>
          </div>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className={styles["card-concat"]}>
                <h5>Visit Feedback</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className={styles["card-concat"]}>
                <h5>Employer Services</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className={styles["card-concat"]}>
                <h5>Billing Inquiries</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className={styles["card-concat"]}>
                <h5>General Inquiries</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <div class={styles["map"]}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.76973624219!2d31.1884237221946!3d30.05946989044669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1671565887077!5m2!1sen!2seg"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </section>
      <section className={styles["about-company"]}>
        <Container>
          <div className={styles["title"]}>
            <h4>About Company</h4>
          </div>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className={styles["information-concat"]}>
                <div className={styles["wrapper-info"]}>
                  <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                  <p>
                    <span>Address</span>5171 W Campbell Ave undefined Kent, Utah
                    53127 United States
                  </p>
                </div>
                <div className={styles["wrapper-info"]}>
                  <FontAwesomeIcon icon={faHeadphones}></FontAwesomeIcon>
                  <p>
                    <span> Call Us</span> (+91)-540-025-124553
                  </p>
                </div>
                <div className={styles["wrapper-info"]}>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  <p>
                    <span>Email </span>sale@Nest.com
                  </p>
                </div>
                <div className={styles["wrapper-info"]}>
                  <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
                  <p>
                    <span>Address</span>5171 W Campbell Ave undefined Kent, Utah
                    53127 United States
                  </p>
                </div>
                <div className={styles["wrapper-button"]}>
                  <button>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>View Map
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles['form-section']}>
        <Container>
        <div className={styles['header-form']}>
        <h1>Contact form</h1>
        <p>Drop Us a Line</p>
        <p>
          Your email address will not be published. Required fields
          are marked *
        </p>
      </div>
          <Row className='align-items-center'>
            <Col lg={6} ms={12} sm={12}>
              <div class="form">
               
                <form action="#">
                  <div className={styles.input}>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                    />
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  </div>
                  <div className={styles.input}>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                    />
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </div>
                  <div className={styles.input}>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Your Subject"
                    />
                    <FontAwesomeIcon icon={faBookBookmark}></FontAwesomeIcon>
                  </div>
                  <div className={`${styles['input']} ${styles['text-area']}`}>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      placeholder="Your Message"
                    ></textarea>
                    <FontAwesomeIcon icon={faParagraph}></FontAwesomeIcon>
                  </div>
                  <input type="submit" value={'Send Message'}/>
                </form>
              </div>
            </Col>
            <Col lg={6} ms={12} sm={12}>
              <div className={styles['img-concat']}>
              <img src={require('../../img/contact-1.png')} alt="img-concat"/></div>
            </Col>
          </Row>
        </Container>
      
      </section>
      
    </>
  );
}

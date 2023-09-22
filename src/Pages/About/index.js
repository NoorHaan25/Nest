import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faSkype,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LinkButton from "../../Components/Link";

export default function About() {
  const [dataCount, setDataCount] = useState([0, 0, 0, 0, 0]);
  const targetValue = [3, 15, 17, 7, 8];
  function ss(){
    dataCount.map((count , index)=>(
      setDataCount((prevState) => {
        const newCount = [...prevState];
        if (count < targetValue[index]) {
          newCount[index] = count + 1;
         console.log("newCount" + newCount, "prevState" + prevState);
          return newCount;
        } else {
          return newCount;
        }
      })
    ))
}
useEffect(()=>{
  const intervals = dataCount.map((count, index) => {
    return setInterval(() => {
      if (count < targetValue[index]) {
        setDataCount((prevState) => 
        {const newCount = [...prevState];
        newCount[index] = count + 1;
       console.log("newCount" + newCount, "prevState" + prevState);
        return newCount;
    })}else{
      clearInterval(intervals[index]);
    }
  },100)
}) 
return () => {
  intervals.forEach(interval => clearInterval(interval));
};
})
  return (
    <Fragment>
      <section className={styles.about}>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className={styles["section-about"]}>
                <img src={require("../../img/about-1.png")} alt="about-1" />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className={styles["about-text"]}>
                <h2>Welcome to Nest</h2>
                <div className={styles["paragraph-about"]}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate id est
                    laborum.
                  </p>
                  <p>
                    Ius ferri velit sanctus cu, sed at soleat accusata. Dictas
                    prompta et Ut placerat legendos interpre.Donec vitae sapien
                    ut libero venenatis faucibus. Nullam quis ante Etiam sit
                    amet orci eget. Quis commodo odio aenean sed adipiscing.
                    Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed
                    vulputate mi sit amet. Commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate id est laborum.
                  </p>
                </div>
              </div>
              <div className={`${styles["about-img"]} d-flex flex-wrap`}>
                <img src={require("../../img/about-2.png")} alt="about-2" />
                <img src={require("../../img/about-3.png")} alt="about-3" />
                <img src={require("../../img/about-4.png")} alt="about-4" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.provide}>
        <div className={styles.header}>
          <h2>What We Provide?</h2>
        </div>
        <Container>
          <Row className="row-gap-4">
            <Col lg={4} md={6} sm={12}>
              <div className={styles["card-about"]}>
                <div className={styles["about-icon"]}>
                  <img src={require("../../img/icon-1.png")} alt="about-icon" />
                </div>
                <h3>Best Prices & Offers</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
                <Link to={"/"}>Read More</Link>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className={styles["card-about"]}>
                <div className={styles["about-icon"]}>
                  <img src={require("../../img/icon-2.png")} alt="about-icon" />
                </div>
                <h3>Wide Assortment</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
                <Link to={"/"}>Read More</Link>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className={styles["card-about"]}>
                <div className={styles["about-icon"]}>
                  <img src={require("../../img/icon-3.png")} alt="about-icon" />
                </div>
                <h3>Free Delivery</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
                <Link to={"/"}>Read More</Link>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className={styles["card-about"]}>
                <div className={styles["about-icon"]}>
                  <img src={require("../../img/icon-4.png")} alt="about-icon" />
                </div>
                <h3>Easy Returns</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
                <Link to={"/"}>Read More</Link>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className={styles["card-about"]}>
                <div className={styles["about-icon"]}>
                  <img src={require("../../img/icon-5.png")} alt="about-icon" />
                </div>
                <h3>100% Satisfaction</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
                <Link to={"/"}>Read More</Link>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className={styles["card-about"]}>
                <div className={styles["about-icon"]}>
                  <img src={require("../../img/icon-6.png")} alt="about-icon" />
                </div>
                <h3>Great Daily Deal</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
                <Link to={"/"}>Read More</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.performance}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} sm={12}>
              <div className={styles["performance-img"]}>
                <img src={require("../../img/about-5.png")} alt="about-5" />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className={styles["performance-text"]}>
                <h3>Our performance</h3>
                <div>
                  Your Partner for <br />
                  e-commerce grocery solution
                </div>
                <p>
                  Ed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                </p>
                <p>
                  Pitatis et quasi architecto beatae vitae dicta sunt explicabo.
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.mission}>
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className={styles["card-mission"]}>
                <h3>Who we are</h3>
                <p>
                  Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                  mattis enim ut tellus eros donec ac odio orci ultrices in.
                  ellus eros donec ac odio orci ultrices in.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className={styles["card-mission"]}>
                <h3>Our history</h3>
                <p>
                  Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                  mattis enim ut tellus eros donec ac odio orci ultrices in.
                  ellus eros donec ac odio orci ultrices in.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className={styles["card-mission"]}>
                <h3>Our mission</h3>
                <p>
                  Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                  mattis enim ut tellus eros donec ac odio orci ultrices in.
                  ellus eros donec ac odio orci ultrices in.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles["about-count"]}>
        <Container>
          <Row>
            {dataCount.map((count) => (
              <Col lg md={6} sm={12}>
                <div className={styles["card-counter"]}>
                  <div className={styles["counter"]}>
                    <span>{count}</span>
                    <span onClick={ss}>+</span>
                  </div>
                  <h4>Glorious years</h4>
                </div>
              </Col>
            ))}

            {/*  <Col lg md={6} sm={12}>
              <div className={styles['card-counter']}>
                <div className={styles['counter']}>
                  <span>{dataCount}</span>
                  <span onClick={inn}>+</span>
                </div>
                <h4>
                Happy clients</h4>
              </div>
            </Col>
            <Col lg md={6} sm={12}>
              <div className={styles['card-counter']}>
                <div className={styles['counter']}>
                  <span>{dataCount}</span>
                  <span>+</span>
                </div>
                <h4>Projects complete</h4>
              </div>
            </Col>
            <Col lg md={6} sm={12}>
            <div className={styles['card-counter']}>
              <div className={styles['counter']}>
                <span>{dataCount}</span>
                <span>+</span>
              </div>
              <h4>Team advisor</h4>
            </div>
            </Col>
            <Col lg md={6} sm={12}>
          <div className={styles['card-counter']}>
            <div className={styles['counter']}>
              <span>{dataCount}</span>
              <span>+</span>
            </div>
            <h4>Products Sale</h4>
          </div>
        </Col>*/}
          </Row>
        </Container>
      </section>
      <section className={styles["team"]}>
        <Container>
          <Row>
            <Col lg={4} md={12} sm={12}>
              <div className={styles["team-text"]}>
                <h3>Our Team</h3>
                <div>
                  Meet Our Expert Team <br />
                </div>
                <p>
                  Ed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                </p>
                <p>
                  Pitatis et quasi architecto beatae vitae dicta sunt explicabo.
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia
                </p>
                <LinkButton text="View All Members" />
              </div>
            </Col>
            <Col lg={8} md={12} sm={12}>
              <div className={`${styles["imgs-team"]}`}>
                <Row>
                  <Col lg={6} md={6} sm={12}>
                    <div className={styles["img-team"]}>
                      <img
                        src={require("../../img/client-1.png")}
                        alt="client-1"
                      />
                      <div className={styles["info-client"]}>
                        <h3> H. Merinda</h3>
                        <p>CEO & Co-Founder</p>
                        <div className={styles["social-media"]}>
                          <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>

                          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faSkype}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <div className={styles["img-team"]}>
                      <img
                        src={require("../../img/client-2.png")}
                        alt="client-2"
                      />
                      <div className={styles["info-client"]}>
                        <h3>Dilan Specter</h3>
                        <p>Head Engineer</p>
                        <div className={styles["social-media"]}>
                          <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faSkype}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}

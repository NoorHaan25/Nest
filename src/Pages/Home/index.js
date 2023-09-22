import React, { Fragment, useState } from "react";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPercent,
  faStar,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import banner1 from "../../img/Home-1.png";
import banner2 from "../../img/Home-2.png";
import banner3 from "../../img/Home-3.png";
import LinkButton from "../../Components/Link";
import Brands from "../../Components/Brands";
import Heading from "../../Components/Heading/indes";
import Information from "../../Components/Information";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard";
export default function Home() {
  const products = useSelector((state) => state.products);
  const topRating = products["top-rating"] || [];
  const discount = products["discount"] || [];
  const topOrder = products["number-orders"] || [];
  const [currentState, setCurrentState] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const rating = <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>;
  const angleRight = () => {
    if (currentState < 1) {
      setCurrentState(currentState + 1);
    }
    console.log(currentState);
  };
  const angleLeft = () => {
    if (currentState > 0) {
      setCurrentState(currentState - 1);
    }
  };
  const information = [
    {
      id: 1,
      h2: "Grocery/Supermart",
      p: "Launching into the grocery vertical, Nest introduces Supermart that is out to bring everyday essentials close to you. From pulses, spices, dairy, personal and sanitary care, breakfast essentials, health drinks, spreads, ready to cook, grooming to cleaning agents, we are happy to present everything you need to run a house. Now buy Grocery products for as low as 1 Rupee only - our 1 Rupee Store presents new products every day for a nominal price of 1 Rupee only. Terms and conditions apply.",
    },
    {
      id: 2,
      h2: "Baby and Kids",
      p: "Launching into the grocery vertical, Nest introduces Supermart that is out to bring everyday essentials close to you. From pulses, spices, dairy, personal and sanitary care, breakfast essentials, health drinks, spreads, ready to cook, grooming to cleaning agents, we are happy to present everything you need to run a house. Now buy Grocery products for as low as 1 Rupee only - our 1 Rupee Store presents new products every day for a nominal price of 1 Rupee only. Terms and conditions apply.",
    },
    {
      id: 3,
      h2: "No Cost EMI",
      p: "In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.",
    },
    {
      id: 4,
      h2: "EMI on Debit Cards",
      p: "Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another",
    },
  ];
  function countDown() {
    let dateCountDown = new Date("December 1, 2023 16:00:00").getTime();
    let count = setInterval(() => {
      let now = new Date().getTime();
      let differenceDate = dateCountDown - now;
      //console.log('differenceDate', differenceDate);
      setDays(Math.floor(differenceDate / (24 * 60 * 60 * 1000)));
      setHours(
        Math.floor((differenceDate % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
      );
      setMinutes(Math.floor((differenceDate % (60 * 60 * 1000)) / (60 * 1000)));
      setSeconds(Math.floor((differenceDate % (60 * 1000)) / 1000));
      //console.log(days, hours, minutes, seconds);
      if (differenceDate < 0) {
        clearInterval(count);
      }
    }, 1000);
  }
  countDown();
  return (
    <Fragment>
      <section className={styles.feature}>
        <ul>
          <li>Everyday fresh products </li>
          <li>Free delivery for order over $70</li>
          <li>Daily Mega Discounts </li>
          <li>Best price on the market </li>
        </ul>
      </section>
      <section className={styles.banners}>
        <Container fluid>
          <Row>
            <Col lg="8">
              <div className={styles["banner"]}>
                <div
                  className={`${styles["img-section"]} ${styles["banner-one"]}`}
                >
                  <img src={banner1} alt="banner" />
                </div>
                <div className={styles["text-banner1"]}>
                  <span>Exclusive Offer - 30%</span>
                  <h1>
                    Feed your family at <br /> best price
                  </h1>
                  <LinkButton text={"Shop Now"} />
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className={styles["col-two"]}>
                <div className={styles.Subbanner}>
                  <div
                    className={`${styles["img-section"]} ${styles["banner-two"]}`}
                  >
                    <img src={banner2} alt="banner" />
                  </div>
                  <div className={styles["text-banner2"]}>
                    <div className={styles["row-one"]}>
                      <h2>
                        The best Organic <br />
                        Products Online
                      </h2>
                      <span>Save to 50%</span>
                    </div>
                    <div className={styles["row-two"]}>
                      <p>Save to 50%</p>
                    </div>
                  </div>
                </div>
                <div className={styles.Subbanner}>
                  <div
                    className={`${styles["img-section"]} ${styles["banner-three"]}`}
                  >
                    <img src={banner3} alt="banner" />
                  </div>
                  <div className={styles["text-banner3"]}>
                    <div className={styles["row-one"]}>
                      <h2>
                        Everyday Fresh & <br />
                        Clean with Our <br />
                        Products
                      </h2>
                    </div>
                    <div className={styles["row-two"]}>
                      <LinkButton text={"Shop Now"} />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Brands />
      <section className={styles["products-tab"]}>
        <Container fluid>
          <div className={styles["wrapper-products-tab"]}>
            <Row>
              <Col lg={3}>
                <div className={styles["best-sells"]}>
                  <div className={styles["text-best-sells"]}>
                    <h3>Daily Best Sells</h3>
                    <p>Exclusive Offer - 20% Off</p>
                    <h4>Specialist in the grocery store from $7.99</h4>
                    <span>Only this week. Don’t miss...</span>
                    <div className={styles["hurry-up"]}>
                      {" "}
                      <Link to={"/"}>Hurry Up!</Link>
                    </div>
                  </div>
                  <div className={styles["wrapperImg-best-sells"]}>
                    <img
                      src={require("../../img/banner-2.png")}
                      alt="img-best-sells"
                    />
                    <img
                      src={require("../../img/banner-1.png")}
                      alt="img-best-sells"
                    />
                  </div>
                </div>
              </Col>
              <Col lg={9}>
                <div className={styles["wrapper-taps"]}>
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="top-order"
                  >
                    <Nav className={` ${styles["nav-items"]}`}>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="top-order"
                          className={styles["link-tab"]}
                        >
                          <FontAwesomeIcon icon={faTag}></FontAwesomeIcon>
                          TOP ORDER
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="top-discount"
                          className={styles["link-tab"]}
                        >
                          <FontAwesomeIcon icon={faPercent}></FontAwesomeIcon>
                          TOP DISCOUNT
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="top-rating"
                          className={styles["link-tab"]}
                        >
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          TOP RATING
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className={styles["tab-content"]}>
                      <Tab.Pane eventKey="top-order">
                        <Row>
                          {topOrder.map((topOrder) => (
                            <Col
                            lg={3}
                            md={6}
                            sm={12}
                              key={topOrder.id}
                            >
                              <ProductCard
                                product={topOrder}
                                type="top-order"
                              />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="top-discount">
                        <Row>
                          {discount.map((discount) => (
                            <Col
                            lg={3}
                            md={6}
                            sm={12}
                              key={discount.id}
                            >
                              <ProductCard product={discount} type="discount" />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="top-rating">
                        <Row>
                          {topRating.map((rating) => (
                            <Col
                            lg={3}
                            md={6}
                            sm={12}
                              key={rating.id}
                            >
                              <ProductCard product={rating} type="rating" />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className={styles.discount}>
        <Container fluid>
          <Row>
            {" "}
            <Col lg={3} md={6} sm={12}>
              {" "}
              <div className={`${styles.card} ${styles["first-child"]}`}>
                <h4>14% Discount</h4>
                <p>Don't miss the discounts in these Fruits & Vegetables</p>
                <div>
                  <LinkButton text={"Check Discount!"} />
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              {" "}
              <div className={`${styles.card} ${styles["second-child"]}`}>
                <h4>20% Discount</h4>
                <p>Organic brands items are currently available</p>
                <div>
                  <LinkButton text={" Hurry Up!"} />
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className={`${styles.card} ${styles["third-child"]}`}>
                <h4>30% Discount</h4>
                <p>Brands are currently available at cheap</p>
                <div>
                  <LinkButton text={"Shop Now"} />
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className={`${styles.card} ${styles["last-child"]}`}>
                <h4>50% Discount</h4>
                <p>Get a surprise discount by registering!</p>
                <div>
                  {" "}
                  <LinkButton text={"Register Now"} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
     <section className={styles['special-discount']}>
      <Container fluid>
        <Row>
          <Col lg={6} md={12} sm={12}>
        <div className={styles['text-special-discount']}>
        <h2>The hot product for this week</h2>
            <p>Dont miss this opportunity at a special discount just for this week.</p>
         
        </div>
        </Col>
          <Col lg={6} md={12} sm={12}>
              <div className={styles['card-count-down']}>
              <div><Link to={'/'}>Get More Deals !</Link></div>   
              <div className={styles['count-down']}>
                <div className={styles['wrapper-item-down']}><span>{days}</span><span>Days</span></div>
                <div className={styles['wrapper-item-down']}><span>{hours}</span><span>Hours</span></div>
                <div className={styles['wrapper-item-down']}><span>{minutes}</span><span>Minutes</span></div>
                <div className={styles['wrapper-item-down']}><span>{seconds}</span><span>Seconds</span></div>
              </div> 
              </div>
          </Col>
        </Row>
      </Container>
    </section>
      <section className={styles["anther-feature"]}>
        <Container fluid>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className={styles["card-feature"]}>
                <div className={styles["img-feature"]}>
                  <img
                    src={require("../../img/feature-1.png")}
                    alt="feature-1"
                  />
                </div>
                <div className={styles["text-feature"]}>
                  <h5>
                    Everyday Fresh with
                    <br />
                    Our Products
                  </h5>
                  <span> Go to supplier</span>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className={styles["card-feature"]}>
                <div className={styles["img-feature"]}>
                  <img
                    src={require("../../img/feature-2.png")}
                    alt="feature-1"
                  />
                </div>
                <div className={styles["text-feature"]}>
                  <h5>
                    Everyday Fresh with
                    <br />
                    Our Products
                  </h5>
                  <span> Go to supplier</span>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className={styles["card-feature"]}>
                <div className={styles["img-feature"]}>
                  <img
                    src={require("../../img/feature-3.png")}
                    alt="feature-1"
                  />
                </div>
                <div className={styles["text-feature"]}>
                  <h5>
                    Everyday Fresh with
                    <br />
                    Our Products
                  </h5>
                  <span> Go to supplier</span>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className={styles["card-feature"]}>
                <div className={styles["img-feature"]}>
                  <img
                    src={require("../../img/feature-4.png")}
                    alt="feature-1"
                  />
                </div>
                <div className={styles["text-feature"]}>
                  <h5>
                    Everyday Fresh with
                    <br />
                    Our Products
                  </h5>
                  <span> Go to supplier</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.blogs}>
        <Container fluid>
          <Row>
            <Col lg={8} md={12} sm={12}>
              <div className={styles.header}>
                <Heading heading={"Our Latest Blogs"} />
                <div className={styles.angles}>
                  <FontAwesomeIcon
                    onClick={angleLeft}
                    className={styles["arrow-left"]}
                    icon={faAngleLeft}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    onClick={angleRight}
                    className={styles["arrow-right"]}
                    icon={faAngleRight}
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div className={styles["wrapper-blogs"]}>
                <div
                  className={styles.card}
                  style={{ left: `${currentState * -311.5}px` }}
                >
                  <div className={styles["blog-img"]}>
                    <img src={require("../../img/blog-1.png")} alt="blog-1" />
                  </div>
                  <div className={styles["text-blog"]}>
                    <h4>Breakfast</h4>
                    <h5>Sticky Ginger Rice Bowls with Pickled Veg</h5>
                    <div className={styles["info-time"]}>
                      <span>February 19, 2022</span>
                      <span>Post a Comment</span>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.card}
                  style={{ left: `${currentState * -311.5}px` }}
                >
                  <div className={styles["blog-img"]}>
                    <img src={require("../../img/blog-2.png")} alt="blog-1" />
                  </div>
                  <div className={styles["text-blog"]}>
                    <h4>Breakfast</h4>
                    <h5>Sticky Ginger Rice Bowls with Pickled Veg</h5>
                    <div className={styles["info-time"]}>
                      <span>February 19, 2022</span>
                      <span>Post a Comment</span>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.card}
                  style={{ left: `${currentState * -311.5}px` }}
                >
                  <div className={styles["blog-img"]}>
                    <img src={require("../../img/blog-3.png")} alt="blog-1" />
                  </div>
                  <div className={styles["text-blog"]}>
                    <h4>Breakfast</h4>
                    <h5>Sticky Ginger Rice Bowls with Pickled Veg</h5>
                    <div className={styles["info-time"]}>
                      <span>February 19, 2022</span>
                      <span>Post a Comment</span>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.card}
                  style={{ left: `${currentState * -311.5}px` }}
                >
                  <div className={styles["blog-img"]}>
                    <img src={require("../../img/blog-4.png")} alt="blog-1" />
                  </div>
                  <div className={styles["text-blog"]}>
                    <h4>Breakfast</h4>
                    <h5>Sticky Ginger Rice Bowls with Pickled Veg</h5>
                    <div className={styles["info-time"]}>
                      <span>February 19, 2022</span>
                      <span>Post a Comment</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <div className={styles.client}>
                <div className={styles.header}>
                  <Heading heading={"Clients Reviews"} />
                </div>
                <div className={styles["wrapper-content"]}>
                  <div className={styles["content-client"]}>
                    <div className={styles["image-client"]}>
                      <img
                        src={require("../../img/client-1.png")}
                        alt="clien-1"
                      />
                    </div>
                    <p className={styles.comment}>
                      While running an early stage startup everything feels
                      hard, that’s why it’s been so nice to have our accounting
                      feel easy. We recommed Qetus.
                    </p>
                    <div className={styles["info-client"]}>
                      <h5>Jacob Leonardo</h5>
                      <span>Senior Manager of Excel Solution</span>
                      <div className={styles.rating}>
                        {Array(5).fill(rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Information info={information} />
    </Fragment>
  );
}

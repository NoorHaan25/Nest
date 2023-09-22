import React from "react";
import Container from "react-bootstrap/esm/Container";
import styles from "./OrderReceived.module.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { getClientInfo } from "../../services/api";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function OrderReceived() {
  const cart = useSelector((state) => state.cart);
  const { state } = useLocation();
  console.log("state", state);
  const cuurentTime = state.time;
  const formatsDay = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  const formatsTime = {
    hour: "numeric",
    minute: "numeric",
  };
  const formattedDay = cuurentTime.toLocaleDateString("en-US", formatsDay);
  const formattedTime = cuurentTime.toLocaleDateString("en-US", formatsTime);
  const formattedOnlyTime = formattedTime.split(",")[1];
  console.log("cuurentTime", formattedOnlyTime);
  function totalProducts() {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.price * item.count;
    }
    return totalPrice;
  }
  function cartLength() {
    let totalCount = 0;
    for (const item of cart) {
      totalCount += item.count;
    }
    console.log(totalCount);
    return totalCount;
  }
  return (
    <section className={styles["order-received"]}>
      <Container fluid>
        <div className={styles.message}>
          <p>Thank you! We have recieved your order.</p>
        </div>
        <div className={styles["details"]}>
          <div className={styles.heading}>
            <h1>Order Recieved</h1>
          </div>
         <div className={styles['items']}>
         <Row>
         <Col lg={3} md={6} sm={12}>
           <div className={styles.item}>
             <h3>Order Number</h3>
             <p>{state.countOrder}</p>
           </div>
         </Col>
         <Col lg={3} md={6} sm={12}>
           <div className={styles.item}>
             <h3>Order Date</h3>
             <p>{formattedDay}</p>
           </div>
         </Col>
         <Col lg={3} md={6} sm={12}>
           <div className={styles.item}>
             <h3>Total Amount</h3>
             <p>${totalProducts()}</p>
           </div>
         </Col>
         <Col lg={3} md={6} sm={12}>
           <div className={styles.item}>
             <h3>Payment Method</h3>
             <p>Cash On Delivery</p>
           </div>
         </Col>
       </Row>
         </div>
        </div>
        <div className={styles["info-order"]}>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div className={styles["details"]}>
                <div className={styles.heading}>
                  <h1>Order Details</h1>
                </div>
                <ul>
                  <li>
                    <span>Total Item</span>
                    <span>{cartLength()}</span>
                  </li>
                  <li>
                    <span>Order Time</span>
                    <span>{formattedOnlyTime}</span>
                  </li>
                  <li>
                    <span>Delivery Time</span>
                    <span>90 Minute Express Delivery</span>
                  </li>
                  <li>
                    <span>Delivery Location</span>
                    <span>House 17/A, West Jalkuri, Dhaka.</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className={styles.details}>
                <div className={styles.heading}>
                  <h1>Order Details</h1>
                </div>
                <ul>
                  <li>
                    <span>Sub Total</span>
                    <span>${totalProducts()}</span>
                  </li>
                  <li>
                    <span>Payment Method</span>
                    <span>{state.paypal}</span>
                  </li>
                  <li>
                    <span>Discount</span>
                    <span>0</span>
                  </li>
                  <li>
                    <span>Total</span>
                    <span>${totalProducts()}</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles["saved-products"]}>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr>
                  <td>
                    <img src={product.image_url} alt={product.name} />
                  </td>
                  <td data-item="Product">{product.name}</td>
                  <td data-item="Price">${product.price}</td>
                  <td data-item="Quantity">{product.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles["buttons"]}>
          <div className={styles["wrapper-button"]}>
            <button>Download invoice</button>
          </div>
          <div className={styles["wrapper-button"]}>
            <button>Back to Home</button>
          </div>
        </div>
      </Container>
    </section>
  );
}

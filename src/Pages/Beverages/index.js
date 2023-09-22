import React from "react";
import styles from "./Beverages.module.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Beverages() {
  const nameBeverages = "beverage";
  const products = useSelector((state) => state.products);
  const beverages = products.beverages || [];
  
  Object.values(beverages).map((value ) => console.log( 'value' , value));
  return (
    <div className={styles.beverages}>
      {<Container>
        <Row>
          {Object.values(beverages).map((value)=>(
            <Col lg={3} md={6} sm={12} key={value.id}>
            <div className={styles["card-item"]}>
              <div className={styles["img-beverage"]}>
                <img
                  src={value['image_url']}
                  alt="img-beverage"
                />
              </div>
              <Link to={`/products/${nameBeverages}`} state={value.productsBeverages}>
                {value.name}
              </Link>
            </div>
        </Col>

          ))}
        </Row>
      </Container>}
    </div>
  );
}

  
// <Col lg={3}>
// <div className={styles["cart-item"]}>
//   <div className={styles["img-beverage"]}>
//     <img src={require("../../img/Herbs.webp")} alt="img-beverage" />
//   </div>
//   <Link>Herbs</Link>
// </div>
// </Col>
// <Col lg={3}>
// <div className={styles["cart-item"]}>
//   <div className={styles["img-beverage"]}>
//     <img
//       src={require("../../img/Juice_and_Syrup.webp")}
//       alt="img-beverage"
//     />
//   </div>
//   <Link>Juice & Syrup</Link>
// </div>
// </Col>
// <Col lg={3}>
// <div className={styles["cart-item"]}>
//   <div className={styles["img-beverage"]}>
//     <img src={require("../../img/tea.webp")} alt="img-beverage" />
//   </div>
//   <Link>Tea</Link>
// </div>
// </Col>
// <Col lg={3}>
// <div className={styles["cart-item"]}>
//   <div className={styles["img-beverage"]}>
//     <img
//       src={require("../../img/water_soda_drinks.webp")}
//       alt="img-beverage"
//     />
//   </div>
//   <Link>water & soda drinks</Link>
// </div>
// </Col>
// <Col lg={3}>
// <div className={styles["cart-item"]}>
//   <div className={styles["img-beverage"]}>
//     <img
//       src={require("../../img/Diet_Beverages.webp")}
//       alt="img-beverage"
//     />
//   </div>
//   <Link>Diet Beverages</Link>
// </div>
// </Col>

import React from 'react'
import styles from "./ProductDetailsComponent.module.css";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Rating from "../Rating";
import SocialMedia from "../SocialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faClose, faHeart } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from '../../rtk/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { addToWhishlist } from '../../rtk/slices/whishlist';
export default function ProductDetailsComponent({className , product, productQuickViewFun}) {
const dispatch =useDispatch()
  return (
    <section className={`${className === 'quick view' ? styles['quick-view']:styles["product-details"]}`}>
      <Container>
      <Row className='align-items-center'>
          <Col lg={6} md={12} sm={12}>
            <div className={`${className === 'quick view' ? styles["img-product-quick-view"] :  styles["img-product"]}`}>
              <img src={product['image_url']} alt={product.name}/>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className={`${className === 'quick view' ? styles['card-quick-view']:styles["card-product-details"]} ${styles['card']}`}>
             <div className={styles['name-product']}> <h2>{product.name}</h2></div>
              <div className={styles.review}>
                <Rating />
                <span>(3 Reviews)</span>
              </div>
              <p className={`${className === 'quick view' ? styles['price-quick-view']:styles.price}`}>${product.price} </p>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit facere
                harum natus amet soluta fuga consectetur alias veritatis
                quisquam ab eligendi itaque eos maiores quibusdam.
              </p>
              <div className={`${className === 'quick view' ? styles['share-product']:styles["share-product"]}`}>
                <span>Share:</span> <SocialMedia />
              </div>
              <div className={styles["button-add"]}>
                <button onClick={()=>{dispatch(addToCart(product))}}>Add Product</button>
              </div>
              <div className={styles['action-button']}>
                <div className={styles["button"]}>
                  <button onClick={()=>{dispatch(addToWhishlist(product))} }>
                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>ADD TO
                    WISH
                  </button>
                </div>
                <div className={styles["button"]}>
                  <button>
                    <FontAwesomeIcon icon={faArrowsRotate}></FontAwesomeIcon>
                    COMPARE THIS
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={`${className == 'quick view' ? styles["quick-view-close"] :styles["product-details-close"]}`} onClick={productQuickViewFun}><FontAwesomeIcon icon={faClose}></FontAwesomeIcon></div>
    </section>
  );
}

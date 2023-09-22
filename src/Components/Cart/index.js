import React, { useState } from 'react'
import { useSelector , useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Cart.module.css'
import {
  faCartShopping,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { removeFromCart } from '../../rtk/slices/cartSlice';
export default function Cart({cartName}) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false);
  function cartLength() {
    let totalCount = 0;
    for (const item of cart) {
      totalCount += item.count;
    }
    // console.log(totalCount);
    return totalCount;
  }
  function totalProducts(){
    let totalPrice = 0
    for (const item of cart) {
      totalPrice += item.price * item.count; 
      }
      // console.log(totalPrice);
    return totalPrice;
  }
  function toggleCart() {
    setToggle(!toggle);
  }
  return (
    <div
      className={`${cartName == 'cart-big-screen' ? styles["icon-section-big-screen"] : styles["icon-section-small-screen"]} ${styles["icon-section"]} d-flex align-items-center`}
      onClick={() => toggleCart()}
    >
      <div className={`${cartName == 'cart-big-screen' ? styles["wrapper-icon-big-screen"] : styles["wrapper-icon-small-screen"]} ${styles["wrapper-icon"]}`}>
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        <span className={`${cartName == 'cart-big-screen' ? styles['counterLength-big-screen'] : styles['counterLength-small-screen']} ${styles.counter}`}>{cartLength()}</span>
      </div>
      <span className={`${cartName == 'cart-small-screen' ? styles['counter-small-screen'] : null}`}>Cart</span>
      <div
        className={`${
          toggle ? (cartName == 'cart-big-screen' ? styles["cartShow"] : styles['cartShoe-small']): (cartName == 'cart-big-screen' ? styles["cartHide"] : styles['cartHide-small'])
        }`}
      >
      <div className={`${cartName == 'cart-small-screen' ? styles['close-cart-small-screen'] : styles['close-cart-big-screen']}`}><FontAwesomeIcon icon={faClose}></FontAwesomeIcon></div>
        <div >
          {cart.length === 0 ? (
            <span className={`${cartName == 'cart-small-screen' ? styles['cartName-small-screen'] : null}`}>No products in the cart.</span>
          ) : (
            <div className={`${styles["wrapper-item"] }`}>
              {cart.map((cartItem) => (
                <div className={`${ cartName == 'cart-big-screen' ? styles["info-cart-big-screen"] :styles['info-cart-small-screen'] } ${styles["info-cart"]}`}>
                  <div className={`${ styles.imgCart }`}>
                    <img
                      src={cartItem.image_url}
                      alt={cartItem.name}
                    />
                  </div>
                  <div styles={`${ styles["text-cart"] }`}>
                    <div className={`${styles.title}`}>
                      <h3>{cartItem.name}</h3>
                    </div>
                    <div>
                      <span className={`${ styles.count }`}>
                        {cartItem.count}
                      </span>
                      <span>*</span>
                      <span className={`${ styles.price }`}>
                        ${cartItem.price}
                      </span>
                    </div>
                  </div>
                  <div className={`${ styles.delete}`} >
                    <FontAwesomeIcon icon={faClose} onClick={() => dispatch(removeFromCart(cartItem))}></FontAwesomeIcon>
                  </div>
                </div>
              ))}
              <div className={`${ styles.total }`}>
                <h4>Subtotal:</h4>
                <span>${totalProducts()}</span>
              </div>
              <div className={`${styles.buttonsCart }`}>
                <Link to={'/viewCart'}>View Cart</Link>
                <Link to={'/checkout'}>Checkout</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
//toggle ? (cartName == 'cart-big-screen' ? styles["cartShow"] : styles['cartShoe-small']): (cartName == 'cart-big-screen' ? styles["cartHide"] : styles['cartHide-small'])
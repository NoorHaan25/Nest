import React from "react";
import styles from "./ViewCart.module.css";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
} from "../../rtk/slices/cartSlice";
import { Link } from "react-router-dom";
export default function ViewCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  function totalProducts(){
    let totalPrice = 0
    for (const item of cart) {
      totalPrice += item.price * item.count; 
      }
      console.log(totalPrice);
    return totalPrice;
  }
  function scrollTop(){
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <Container fluid>
        <table className={styles['table-cart']}>
          <thead className={styles.thead}>
            <tr>
              <th ></th>
              <th ></th>
              <th >Product</th>
              <th >Price</th>
              <th >Quantity</th>
              <th >Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr>
                <td data-item="" onClick={() => dispatch(removeFromCart(product))}>x</td>
                <td data-item="" >
                  <div className={styles["img-product"]}>
                    <img src={product.image_url} alt={product.name} />
                  </div>
                </td>
                <td data-item="Product">{product.name}</td>
                <td data-item="Price">${product.price}</td>
                <td data-item="Quantity">
                  <div className={styles.quantity}>
                    <div className={styles["number-count"]}>
                      <span>{product.count}</span>
                    </div>
                    <div className={styles.counter}>
                      <span
                        onClick={() => {
                          dispatch(increaseCount(product));
                        }}
                      >
                        +
                      </span>
                      <span onClick={() => dispatch(decreaseCount(product))}>
                        -
                      </span>
                    </div>
                  </div>
                </td>
                <td data-item="Subtotal">{product.price * product.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles["coupon-code"]}>
          <input type="text" id="coupon" placeholder="Coupon Code" />
          <button>Apply Coupon</button>
        </div>
        <div className={`${styles["total-products"]} d-flex align-items-center flex-column`}>
          <h2>Cart totals</h2>
          <table>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>{totalProducts()}</td>
              </tr>
              <tr>
                <td>total </td> 
                <td>{totalProducts()}</td>
              </tr>
            </tbody>
          </table>
          <Link to={'/checkout'} onClick={()=>{scrollTop()}}>Proceed to checkout</Link>
        </div>
      </Container>
    </div>
  );
}

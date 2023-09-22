import React, { useState } from "react";
import styles from "./Checkout.module.css";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useSelector } from "react-redux";
import { addClientInfo } from "../../services/api";
import InvalidInput from "../../Components/InvalidInput";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [paypal, setPaypal] = useState("");
  const [isFirstNameValid , setIsFirstNameValid] =useState(false)
  const [isLastNameValid , setIsLastNameValid] =useState(false)
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isCountryValid, setIsCountryValid] = useState(false);
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [isCityValid, setIsCityValid] = useState(false);
  const cart = useSelector((state) => state.cart);
  // const client = useSelector((state) => state.client);
  // //console.log('client' + client);
  function totalProducts() {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.price * item.count;
    }
    console.log(totalPrice);
    return totalPrice;
  }
  function validPhoneNumber(e) {
    let phoneReg = /\(\d{4}\)\s\d{3}-\d{4}/gi;
    const phone = e.target.value;
    const validNumber = phoneReg.test(phone);
    setPhone(phone);
    setIsPhoneValid(validNumber);
  }
  function validEmailNumber(e) {
    let emailReg = /\w+(\d{2})?@\w+.\w+/gi;
    const email = e.target.value;
    const validEmail = emailReg.test(email);
    setEmail(email);
    setIsEmailValid(validEmail);
  }
  function validFirstName(e){
    let textReg = /\w{3,}/gi
    const text = e.target.value;
    const validText = textReg.test(text);
    setFirstName(text);
    setIsFirstNameValid(validText);
  }
  function validLastName(e){
    let textReg = /\w{3,}/gi
    const text = e.target.value;
    const validText = textReg.test(text);
    setLastName(text);
    setIsLastNameValid(validText);
  }
  function validCountry(e){
    let textReg = /\w{3,}/gi
    const text = e.target.value;
    const validText = textReg.test(text);
    setCountry(text);
    setIsCountryValid(validText);
  }
  function validAdress(e){
    let textReg = /\d{1,}\s\w+,\w+,\w+/gi
    const text = e.target.value;
    const validText = textReg.test(text);
    setAddress(text);
    setIsAddressValid(validText);
  }
  function validCity(e){
    let textReg = /\w{3,}/gi
    const text = e.target.value;
    const validText = textReg.test(text);
    setCity(text);
    setIsCityValid(validText);
  }
  function onSubmitHandler(e) {
    const cuurentTime = new Date()
    e.preventDefault();
    if (isPhoneValid && isEmailValid && isFirstNameValid && isLastNameValid &&  isAddressValid && isCountryValid && isCityValid) {
      console.log(
        firstName + lasttName + company + country + address + phone + email + city
      );
      addClientInfo({
        firstName,
        lasttName,
        company,
        country,
        address,
        phone,
        email,
        paypal,
        city 
      }).then((response) => {
        console.log(response);
        if(response.status == 200 || response.status == 201){
          const preCountOrder = response.data.countOrder || 0
          navigate('/orderReceived' , {state:{...response.data , time:cuurentTime , countOrder:preCountOrder+1}})
          
        }
      });
    } else {
      console.log("invalid response");
      return null
    }
  }
  function onChangePaypal(e) {
    setPaypal(e.target.value);
  }
  function dropDown() {
    setToggle(!toggle);
  }
  return (
    <section className={styles.checkout}>
      <Container>
        <div className={styles.coupon}>
          <div className={styles["heading-coupon"]}>
            <h4>Have a coupon?</h4>
            <p
              onClick={() => {
                dropDown();
              }}
            >
              Click here to enter your code
            </p>
          </div>
          <div
            className={`${
              toggle ? styles["code-coupon"] : styles["hide-dropdown"]
            } `}
          >
            <p>If you have a coupon code, please apply it below.</p>
            <input
              type="text"
              className={styles["input-code"]}
              placeholder="Coupon Code"
            />
            <button>Apply Coupon</button>
          </div>
        </div>
        <div className={styles["info-client"]}>
          <Row >
            <Col lg={8} md={12} sm={12}>
              <div className={styles['wrapper-heading']}>
                <h1 className={styles["heading"]}>Billing details</h1>
                <form onSubmit={onSubmitHandler} id="info-client" noValidate>
                  <div
                    className={`d-flex align-items-center gap-5 ${styles["full-name"]}`}
                  >
                    <div className={styles["sub-name"]}>
                      <label htmlFor="first-name">
                        First name <span>*</span>
                      </label>
                      <div className={styles["wrapper-input"]}>
                      <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      value={firstName}
                      onChange={validFirstName}
                      required
                      className={( firstName !== "" ) ? (isFirstNameValid? styles['valid'] : styles['invalid']) : null}
                    />
                    {( firstName !== "" ) ? (isFirstNameValid ? <span className={styles['icon-valid']}>✔️</span> : <InvalidInput post='Invalid Number'/>) : null}
                      </div>
                     
                    </div>
                    <div className={styles["sub-name"]}>
                      <label htmlFor="last-name">
                        Last name <span>*</span>
                      </label>
                      <div className={styles["wrapper-input"]}>
                      <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      value={lasttName}
                      onChange={validLastName}
                      required
                      className={( lasttName !== "" ) ? (isLastNameValid? styles['valid'] : styles['invalid']) : null}
                    />
                    {( lasttName !== "" ) ? (isLastNameValid ? <span className={styles['icon-valid']}>✔️</span> : <InvalidInput post='Invalid Number'/>) : null}
                      </div>
                      
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company">Company name (optional)</label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={company}
                      onChange={(e) => {
                        setCompany(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="country">
                      Country / Region <span>*</span>
                    </label>
                    <div className={styles["wrapper-input"]}>
                    <input
                    type="text"
                    name="company"
                    id="country"
                    value={country}
                    onChange={validCountry}
                    className={( country !== "" ) ? (isCountryValid ? styles['valid'] : styles['invalid']) : null}
                    />
                    {( country !== "" ) ? (isCountryValid ? <span className={styles['icon-valid']}>✔️</span> : <InvalidInput post='Invalid country'/>) : null}
                    </div>
                    
                  </div>
                  <div>
                    <label htmlFor="address">
                      Street address <span>*</span>
                    </label>
                    <div className={styles["wrapper-input"]}>
                    <input
                    type="text"
                    name="address"
                    placeholder="Ex: house Number streetAddress,city,country"
                    id="address"
                    value={address}
                    onChange={validAdress}
                    required
                    className={( address !== "" ) ? (isAddressValid ? styles['valid'] : styles['invalid']) : null}
                  />
                  {( address !== "" ) ? (isAddressValid ? <span className={styles['icon-valid']}>✔️</span> : <InvalidInput post='Invalid Address'/>) : null}
                    </div>
                   
                  </div>
                  <div>
                    <label htmlFor="city">
                      Town / City <span>*</span>
                    </label>
                    <div className={styles["wrapper-input"]}>
                    
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={city}
                      onChange={validCity}
                      required
                      className={( city !== "" ) ? (isCityValid ? styles['valid'] : styles['invalid']) : null}
                      />
                      {( city !== "" ) ? (isCityValid ? <span className={styles['icon-valid']}>✔️</span> : <InvalidInput post='Invalid city'/>) : null}
                    </div>
                    
                  </div>
                  <div>
                    <label htmlFor="state">State / County (optional)</label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">
                      Phone <span>*</span>
                    </label>
                    <div className={styles['wrapper-input']}>
                    <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={phone || ""}
                    onChange={validPhoneNumber}
                    placeholder="(0000) 000-0000"
                    required
                    className={( phone !== "" ) ? (isPhoneValid ? styles['valid'] : styles['invalid']) : null}
                  />
                  {( phone !== "" ) ? (isPhoneValid ? <span className={styles['icon-valid']}>✔️</span> : <InvalidInput post='Invalid Number'/>) : null}
                    </div>
                    </div>
                  <div>
                    <label htmlFor="email">
                      Email address <span>*</span>
                    </label>
                    <div className={styles['wrapper-input']}>
                    <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={validEmailNumber}
                    placeholder="xxxx(5555)@xxxx.xxxx"
                    required
                    className={( email !== "" ) ? (isEmailValid ? styles['valid'] : styles['invalid']) : null}
                    
                  />
                  {( email !== "" ) ? (isEmailValid ? <span className={styles['icon-valid']}>✔️</span> : <InvalidInput post='Invalid Email'/>) : null}
                    </div>
                    
                  </div>
                </form>
              </div>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <div className={styles['wrapper-heading']}>
                <h1 className={styles["heading"]}>Additional information</h1>
                <div className={styles["order-notes"]}>
                  <label>Order notes (optional)</label>
                  <textarea
                    rows={5}
                    cols={5}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                  ></textarea>
                </div>
              </div>
              <div className={styles["order-products"]}>
                <div>
                  <h1>Your Order</h1>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Products</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product) => (
                      <tr>
                        <td>
                          <div className={styles["info-product"]}>
                            <div className={styles.imgProduct}>
                              <img src={product.image_url} alt={product.name} />
                            </div>
                            <div styles={styles["text-product"]}>
                              <div className={styles.title}>
                                <h3>{product.name}</h3>
                              </div>
                              <div>
                                <span>x</span>
                                <span className={styles.count}>
                                  {product.count}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className={styles["total-price"]}>
                            ${product.price * product.count}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className={styles.totalProducts}>
                  <ul>
                    <li>
                      <span>Subtotal</span>
                      <span>${totalProducts()}</span>
                    </li>
                    <li>
                      <span>Total</span>
                      <span>${totalProducts()}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.payment}>
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="bank-direct"
                      value="Direct bank transfer"
                      name="order"
                      form="info-client"
                      checked={paypal === "Direct bank transfer"}
                      onChange={onChangePaypal}
                      required
                    />
                    <label htmlFor="bank-direct">Direct bank transfer</label>
                    <div className={styles["box-order"]}>
                      <p>
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="check-payments"
                      value="Check payments"
                      name="order"
                      form="info-client"
                      checked={paypal === "Check payments"}
                      onChange={onChangePaypal}
                      required
                    />
                    <label htmlFor="check-payments">Check payments</label>
                    <div className={styles["box-order"]}>
                      <p>
                        Please send a check to Store Name, Store Street, Store
                        Town, Store State / County, Store Postcode.
                      </p>
                    </div>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="delivery"
                      value="Cash on delivery"
                      name="order"
                      form="info-client"
                      checked={paypal === "Cash on delivery"}
                      onChange={onChangePaypal}
                      required
                    />
                    <label htmlFor="delivery">Cash on delivery</label>
                    <div className={styles["box-order"]}>
                      <p>Pay with cash upon delivery.</p>
                    </div>
                  </li>
                </ul>
                <div className={styles["privacy-policy"]}>
                  <p>
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our<span>privacy policy.</span>
                  </p>
                </div>
                <div>
                  <div className={styles.button}>
                    <input
                      type="submit"
                      value={"Place order"}
                      form="info-client"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

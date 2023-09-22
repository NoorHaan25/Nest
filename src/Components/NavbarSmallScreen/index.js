import React, { useState } from "react";
import styles from "./NavbarSmallScreen.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faEnvelope, faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchProducts from "../SearchProducts";
export default function NavbarSmallScreen({openNavbar , handlerNavbar}) {
  const products = useSelector((state) => state.products);
  //console.log("products", products);
  const vegetables = products.vegetables || [];
  const fruits = products.fruits || [];
  const beverages = products.beverages || [];
  const dairy = products.dairy || [];
  const desserts = products.desserts || [];
  const meat = products.meat || [];
  const snacks = products.snacks || [];
  const cheese = products.cheese || [];
  const nameVegetables = "vegetables";
  const nameFruits = "fruits";
  const nameBeverages = "beverages";
  const nameDairy = "dairy";
  const nameDesserts = "desserts";
  const nameMeat = "meat";
  const nameSnacks = "snacks";
  const nameCheese = "cheese";
  const [toggleLinks , setToggleLinks] =useState(true)
  const [toggleCategories , setToggleCategories] =useState(false)
  function toggleLink(){
    setToggleLinks(!toggleLinks)
    setToggleCategories(!toggleCategories);
  }
  function toggleCategorie(){
    setToggleLinks(!toggleLinks)
    setToggleCategories(!toggleCategories);
  }
  return (
    <div className={`${openNavbar ? styles['show'] : styles['hide']} ${styles["navbar-small-screen"]}`}>
      <div className={`${openNavbar ?  styles['active-navbar'] : styles["content-navbar-small"]} ${styles["content-navbar-small"]}`}>
      
      <div className={styles["close"]} onClick={handlerNavbar}>
          <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
        </div>
        <div className={styles['search-products']}><SearchProducts/></div>
        <div className={styles["buttons"]}>
          <button className={`${toggleLinks ? styles["button-active"] : styles["button-menu"]} ${styles["button-menu"]}`} onClick={toggleLink}>Menu</button>
          <button className={`${toggleCategories ? styles["button-active"] : styles["button-category"]} ${styles["button-category"]}`} onClick={toggleCategorie}>Categories</button>
        </div>
        <div className={`${toggleLinks ? styles['activeLinks'] : styles['content-navbar'] } ${styles['content-navbar']}`}>
          <div className={styles["links"]}>
            <ul>
              <li>
                <Link to={"/"} className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"about"} className={styles.link}>
                  About
                </Link>
              </li>
              <li>
                <Link to={"shop"} className={styles.links} >
                  Shop
                </Link>
              </li>
              <li>
                <Link to={"blog"} className={styles.link}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to={"Concat"} className={styles.link}>
                  Concat
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${toggleCategories ? styles['activeLinks'] : styles['content-navbar'] } ${styles['Categories']}`}>
          <ul>
            <li>
              <Link to={`/products/${nameVegetables}`} state={vegetables}>
                Vegetables
              </Link>
            </li>
            <li>
              <Link to={`/products/${nameFruits}`} state={fruits}>
                Fruits
              </Link>
            </li>
            <li>
              <Link to={`/products/${nameBeverages}`} state={beverages}>
                Beverages
              </Link>
            </li>
            <li>
              <Link to={`/products/${nameDairy}`} state={dairy}>
                Dairy
              </Link>
            </li>
            <li>
              <Link to={`/products/${nameDesserts}`} state={desserts}>
                Desserts
              </Link>
            </li>
            <li>
              <Link to={`/products/${nameMeat}`} state={meat}>
                Meat
              </Link>
            </li>
            <li>
              <Link to={`/products/${nameSnacks}`} state={snacks}>
                Snacks
              </Link>
            </li>
            <li>
              <Link to={`/products/${nameCheese}`} state={cheese}>
                Cheese
              </Link>
            </li>
          </ul>
        </div>
        <div  className={styles['communication']}>
          <div className={styles['wrapper-communication']}>
          <div className={styles['item']}>
            <FontAwesomeIcon icon={faHeadphones}></FontAwesomeIcon>
            <span>9806071234</span>
          </div>
          <div className={styles['item']}>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            <span>sendmail@example.com</span>
          </div>
          </div>
          <div className={styles['buttons-signUp']}>
          <button className={styles['button']}><Link to={'./signup'}>Sign Up</Link></button>
          <button className={styles['button']}><Link to={'./login'}>Log In</Link></button>
          </div>
        </div>
      </div>

    </div>
  );
}

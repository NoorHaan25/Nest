import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rtk/slices/productsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo";
import NavbarSmallScreen from "../NavbarSmallScreen";
import Cart from "../Cart";
import User from "../User";
export default function LinksNavbar() {
  const [toggle, setToggle] = useState(false);
  const [scroll , setScroll] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [openNavbar, setOpenNavbar] = useState(false)
  const vegetables = products.vegetables || [];
  const fruits = products.fruits || [];
  const beverages = products.beverages || [];
  const dairy = products.dairy || [];
  const desserts = products.desserts || [];
  const meat = products.meat || [];
  const snacks = products.snacks || [];
  const cheese = products.cheese || [];
  const allBeverages = Object.values(beverages).map((productBeverage)=> productBeverage.productsBeverages
  )
  const [tea , diet , herbs , coffe , juiceSyrup , waterSodaDrinks] = allBeverages
  const allProductsBeveragess = [...tea || [], ...diet || [], ...herbs || [] , ...coffe  || [], ...juiceSyrup || [], ...waterSodaDrinks || []]

  const nameVegetables = "vegetables";
  const nameFruits = "fruits";
  const nameDairy = "dairy";
  const nameDesserts = "desserts";
  const nameMeat = "meat";
  const nameSnacks = "snacks";
  const nameCheese = "cheese";
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  
  useEffect(() => {
    dispatch(fetchProducts());
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function handlerNavbar(){
    setOpenNavbar(!openNavbar)
  }
  function scrollUp(){
    return window.scrollTo(0, 0);
  }
  return (
    <section className={`${scroll ? styles['navbar-active'] : ''} ${styles['navbar-section']}`}>
      <Container fluid>
        <Row className="align-items-center justify-content-between">
        <Col md={3} sm={3} xs={3} className={`${styles['col-hide-lg']}`}>
          <div className={styles['user']}><User/></div>
        </Col>
          <Col lg={4} md={6} sm={6} xs={6}>
            <div
              className={styles["wrapper-categories"]}
              onClick={() => toggleHandler()}
            >
              <img src={require("../../img/grid.png")} alt="grid" />
              <div className={styles.dropdown}>
                <span className={styles.selected}>Browse All Categories</span>
                <span
                  className={`${styles.caret} ${
                    toggle ? styles["caret-rotate"] : null
                  }`}
                ></span>
                <ul
                  className={`${styles.menu} ${toggle ? styles.active : null} `}
                >
                  <li>
                    <span className={styles["counter"]}>
                      {vegetables.length}
                    </span>
                    <Link to={`/products/${nameVegetables}`} state={vegetables}>
                      <div className={styles["icon"]}>
                        <img
                          src={require("../../img/icon-category-1.png")}
                          alt="icon"
                        />
                        <span className={styles.title}>Vegetables </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <span className={styles["counter"]}>{fruits.length}</span>
                    <Link to={`/products/${nameFruits}`} state={fruits}>
                      <div className={styles["icon"]}>
                        <img
                          src={require("../../img/icon-category-8.png")}
                          alt="icon"
                        />
                        <span className={styles.title}>Fruits </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <span className={styles["counter"]}>
                      {allProductsBeveragess.length}
                    </span>
                    <Link to={'/beverages-menu'} state={beverages}>
                      <div className={styles["icon"]}>
                        <img
                          src={require("../../img/icon-category-1.png")}
                          alt="icon"
                        />
                        <span className={styles.title}>Beverages </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <span className={styles["counter"]}>{dairy.length}</span>
                    <Link to={`/products/${nameDairy}`} state={dairy}>
                      <div className={styles["icon"]}>
                        <img
                          src={require("../../img/icon-category-9.png")}
                          alt="icon"
                        />
                        <span className={styles.title}>Dairy </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <span className={styles["counter"]}>{desserts.length}</span>
                    <Link to={`/products/${nameDesserts}`} state={desserts}>
                      <div className={styles["icon"]}>
                        <img
                          src={require("../../img/icon-category-1.png")}
                          alt="icon"
                        />
                        <span className={styles.title}>Desserts </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <span className={styles["counter"]}>{meat.length}</span>
                    <Link to={`/products/${nameMeat}`} state={meat}>
                      <div className={styles["icon"]}>
                        <img
                          src={require("../../img/icon-category-1.png")}
                          alt="icon"
                        />
                        <span className={styles.title}>Meat </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <span className={styles["counter"]}>{snacks.length}</span>
                    <Link to={`/products/${nameSnacks}`} state={snacks}>
                      <div className={styles["icon"]}>
                        <img
                          src={require("../../img/icon-category-1.png")}
                          alt="icon"
                        />
                        <span className={styles.title}>Snacks </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <span className={styles["counter"]}>{cheese.length}</span>
                    <Link to={`/products/${nameCheese}`} state={cheese}>
                      <div className={styles["icon"]}>
                        <img
                          src={require("../../img/icon-category-1.png")}
                          alt="icon"
                        />
                        <span className={styles.title}>Cheese </span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles['logo']}>
            <Logo logoStyle={"logoStyle"} />
            </div>
          </Col>
          <Col lg={8} md={3} sm={3} xs={3}>
            <nav className={`${styles["navbar"]} d-flex align-items-center justify-content-end`}>
            <div className={styles['cart']}>
              <Cart cartName='cart-small-screen'/>
            </div>
              <div className={styles["small-screen-bars"]} onClick={handlerNavbar}>
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
              </div>
              <ul>
                <li>
                  <Link to={"/"} className={styles.links} onClick={()=>scrollUp()}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"about"} className={styles.links} onClick={()=>scrollUp()}>
                    About
                  </Link>
                </li><li>
                <Link to={"shop"} className={styles.links} onClick={()=>scrollUp()}>
                  Shop
                </Link>
              </li>
                <li>
                  <Link to={"blog"} className={styles.links} onClick={()=>scrollUp()}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to={"Concat"} className={styles.links} onClick={()=>scrollUp()}>
                    Concat
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
        <NavbarSmallScreen openNavbar={openNavbar} handlerNavbar={handlerNavbar}/>
      </Container>
      
    </section>
  );
}

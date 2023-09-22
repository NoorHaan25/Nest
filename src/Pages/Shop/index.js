import React, { Fragment , useEffect, useState } from "react";
import styles from "./Shop.module.css";
import Sidebar from "../../Components/Sidebar";
import ProductsShop from "../../Components/ProductsShop";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { allProducts } from "../../allProducts";
import Pagination from "../../Components/Pagination";
export default function Shop() {
  const products = useSelector((state) => state.products);
  const [typeCategory, setTypeCategory] = useState("all");
  const [price, setPrice] = useState('all-price');
  const [currentPage , setCurrentPage]= useState(1)
  const allProduct = allProducts(products);
  const filterItemsByCategory = allProduct.filter((product) => {
    if (typeCategory === "vegetables" && product.category === "vegetables") {
      return product;
    } else if (typeCategory === "fruits" && product.category === "fruits") {
      return product;
    } else if (
      typeCategory === "beverages" &&
      product.category === "beverages"
    ) {
      return product;
    } else if (typeCategory === "dairy" && product.category === "dairy") {
      return product;
    } else if (typeCategory === "desserts" && product.category === "desserts") {
      return product;
    } else if (typeCategory === "meat" && product.category === "meat") {
      return product;
    } else if (typeCategory === "snacks" && product.category === "snacks") {
      return product;
    } else if (typeCategory === "cheese" && product.category === "cheese") {
      return product;
    } else if (typeCategory === "all") {
      return product;
    }
    return null;
  });
  const filterItemsByPrice = filterItemsByCategory.filter((product) => {
    if (price === 'less < 50' &&  product.price <= 50) {
     
      return product;
    }
    else if(price === '50-100' && (product.price > 50 && product.price <= 100)){
      // console.log("price50-100", product);
      return product;
    }
    else if(price === '100-150'  && (product.price > 100 && product.price <= 150)){
      // console.log("price100-150", product);
      return product;
    }
    else if(price === 'above-150'  && (product.price > 150 )){
      // console.log("price above150", product);
      return product;
    }
    else if (price === "all-price") {
      return product;
    }
    return null;
  });
  const product_for_page = 70;
  const pages = Math.floor(filterItemsByPrice.length / product_for_page) //504 / 70 => 18
  const startIndex = (currentPage - 1) * product_for_page //0 //70 //140
  const endIndex = currentPage * product_for_page//70 //140 //420
  const orderProducts = filterItemsByPrice.slice(startIndex, endIndex)
  console.log('all' , orderProducts);
  return (
    <Fragment>
    <div className={styles.shop}>
      <Container fluid>
        <Row>
          <Col lg={2} md={2} sm={12} >
            <Sidebar
              typeCategory={typeCategory}
              setTypeCategory={setTypeCategory}
              price={price}
              setPrice={setPrice}
            />
          </Col>
          <Col lg={10} md={10} sm={12} >
            <ProductsShop allProduct={orderProducts} />
          </Col>
        </Row>
      </Container>
    </div>
    <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </Fragment>
  );
}

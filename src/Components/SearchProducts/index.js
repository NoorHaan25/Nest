import React, { useState } from "react";
import styles from "./SearchProducts.module.css";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { allProducts } from "../../allProducts";
import { useSelector } from "react-redux";
export default function SearchProducts() {
  const navigate = useNavigate()
  const products = useSelector((state) => state.products);
  const [searchProduct, setSearchProduct] = useState("");
  const [resultSearch, setResultSearch] = useState([]);
  function fetchData(value) {
      const dataAllProducts = allProducts(products)
      console.log('dataAllProducts' , dataAllProducts);
      const result = dataAllProducts.filter((product) => {
        return (
          value &&
          product &&
          product.name &&
          product.name.toLowerCase().includes(value)
        );
      });
      console.log(result);
      setResultSearch(result);
  }
  function handleChange(value) {
    setSearchProduct(value);
    fetchData(value);
  }
  return (
    <div className={styles["wrapper-search"]}>
      <div className={styles.search}>
        <div className={styles["input-search"]}>
          <input
            type="search"
            placeholder="Search For Product..."
            value={searchProduct}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
        </div>
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </div>
      <div className={styles.result}>
        {resultSearch && resultSearch.length > 0 ? (
          <ul>
          { resultSearch.length > 0 ? (
            resultSearch.map((result) => (
              <li key={result.id} onClick={()=>navigate('/product-details' , {state:{result}})}>{result.name}</li>
            ))
          ) : (
            <li>Not Product Found</li>
          )}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
// <ul class="menu">
// <li class="active">en</li>
// <li>ar</li>
// </ul>

// const products = useSelector((state) => state.products);
// // console.log('products', products);

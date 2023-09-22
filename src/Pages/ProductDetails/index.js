import React from "react";
import { useLocation } from "react-router-dom";
import ProductDetailsComponent from "../../Components/ProductDetailsComponent";

export default function ProductDetails() {
  const{state} = useLocation()
  
  const productDetails = state.result
  
  return (
    <ProductDetailsComponent product={productDetails} />
  );
}

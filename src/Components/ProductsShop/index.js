import React, { useState } from 'react'
import styles from './ProductsShop.module.css'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import ProductCard from '../ProductCard'
import ProductDetailsComponent from '../ProductDetailsComponent'
export default function ProductShop({allProduct}) {
  const [quickView , setQuickView] = useState(true)
  const [ productDetails , setProductDetails] =useState(null)
  function productQuickView(productQuickView){
    setQuickView(!quickView)
    setProductDetails(productQuickView)
  }
  return (
    <div>
      <Container>
        <Row>
          {allProduct.map(product=><Col lg={3} md={6} sm={12} key={product.id}><ProductCard product={product} productQuickViewFun={() => productQuickView(product)}
          quickViewState={quickView}/></Col>)}
        </Row>
      </Container>
      {productDetails && (<div className={`${quickView == true ? styles['show'] : styles['hide']} ${styles['product-details']}`}>
      <ProductDetailsComponent className='quick view'  productQuickViewFun={productQuickView}  product={productDetails}/>
  </div>)}
    </div>
  )
}

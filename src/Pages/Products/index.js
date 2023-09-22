import React, { useState } from 'react'
import styles from './Products.module.css'
import { useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ProductCard from '../../Components/ProductCard';
import ProductDetailsComponent from '../../Components/ProductDetailsComponent';
export default function Products() {
  const [quickView , setQuickView] = useState(false)
  const [ productDetails , setProductDetails] =useState(null)
  const location = useLocation()
  // console.log(location.pathname);
  const {state} = location
  // console.log('state' , state)
  function productQuickView(productQuickView){
    setQuickView(!quickView)
    setProductDetails(productQuickView)
  }
  function typeProducts(){
    if(location.pathname !== '/products/beverages'){
      console.log('state' , state);
      return(
        state.map((product)=> <Col lg={3} md={6} sm={12} key={product.id}><ProductCard product={product} productQuickViewFun={() => productQuickView(product)}
        quickViewState={quickView}/></Col>) 
      )
    }
  }
  typeProducts()
  return (
    <div>
      <Container>
        <Row>
          {typeProducts()}
        </Row>
      </Container>
      {productDetails && (<div className={`${quickView == true ? styles['show'] : styles['hide']} ${styles['product-details']}`}>
          <ProductDetailsComponent className='quick view'  productQuickViewFun={productQuickView}  product={productDetails}/>
      </div>)}
    </div>
  )
}

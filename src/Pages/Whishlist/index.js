import React from 'react'
import styles from './Whishlist.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../rtk/slices/cartSlice';
import { removeFromWhislist } from '../../rtk/slices/whishlist';
export default function Whishlist() {
  const whishlist = useSelector((state) => state.whishlist);
  
  const dispatch = useDispatch()

 
  return (
    <table className={styles['table-whishlist']}>
          <thead className={styles.thead}>
            <tr>
            <td></td>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Status</th>
              <th>Shoping</th>
            </tr>
          </thead>
          <tbody>
    {whishlist.map((whishlistItem)=>( <tr>
      <td data-item=""  onClick={() => dispatch(removeFromWhislist(whishlistItem))}>x</td>
      <td data-item=""><div className={styles["img-product"]}>
      <img src={whishlistItem.image_url} alt={whishlistItem.name} />
    </div></td>
      <td data-item="Product">{whishlistItem.name} </td>
      <td data-item="Price">{whishlistItem.price} </td>
      <td data-item="Description" className={styles['description']}>Lorem ipsum nobis eaque excepturi nisi eveniet...</td>
      <td data-item="Status" className={styles['status']}>Stock In</td>
      <td data-item="Add To Cart"><button onClick={()=>{dispatch(addToCart(whishlistItem))}}>Add to cart</button></td>
    </tr>))}
           
          </tbody>
        </table>
  )
}

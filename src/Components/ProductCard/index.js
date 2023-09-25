import { faEye, faHeart, faRandom, faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from 'react-redux'
import styles from "./ProductCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToCart } from "../../rtk/slices/cartSlice";
import { addToWhishlist } from "../../rtk/slices/whishlist";
function ProductCard({ product , productQuickViewFun  , type}) {
  const dispatch = useDispatch()
  return (
    <div className={`${type === 'rating' || 'discount' ||  'top-order' ? styles['other-card'] : null} ${styles.card}`}>
      {type === 'rating' ? <div className={styles['rating']}><span>{product.rate}</span></div> : (type === "discount" ? <div className={styles['discount']}><span>{product.discount}</span></div> : (type === "top-order" ? <div className={styles['top-order']}><span>{product['number-order']}</span></div> : null))}
      <div className={styles["img-product"]}>
        <img src={product.image_url} alt="product-img" />
      </div>
      <div className={styles.review}>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      </div>
      <div className={styles["card-body"]}>
        <div className={styles.title}>
          <h3>{product.name}</h3>
        </div>
        <div className={styles.price}>
          <span>${product.price}</span>
        </div>
        <button onClick={()=>{dispatch(addToCart(product))}}>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        Add To Cart
        </button>
        <div className={styles.actions}>
        <FontAwesomeIcon icon={faEye} onClick={productQuickViewFun}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faHeart} onClick={()=>{dispatch(addToWhishlist(product))} } ></FontAwesomeIcon>
        <FontAwesomeIcon icon={faRandom}></FontAwesomeIcon>
        </div>
      </div>
      
    </div>
  );
}
export default ProductCard;

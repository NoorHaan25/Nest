import React from 'react'
import styles from './Sidebar.module.css'
export default function Sidebar({typeCategory , setTypeCategory , price , setPrice}) {
 
  return (
    <div className={styles.sidebar}>
      <div className={styles['content-sidebar']}>
        <div className={styles['sidebar-title']}>
          <h2>Category</h2>
        </div>
        <div className={styles['wrapper-sidebar']}>
          <ul>
          <li>
          <input
            type="radio"
            id="all"
            name="category"
            value={typeCategory}
            onChange={(e)=>{setTypeCategory(e.target.id)}}
          />
          <label htmlFor="all">All</label>
          </li>
          <li>
          <input
            type="radio"
            id="vegetables"
            name="category"
            value={typeCategory}
            onChange={(e)=>{setTypeCategory(e.target.id)}}
          />
          <label htmlFor="vegetables">Vegetables</label>
          </li>
          <li>
          <input
            type="radio"
            id="fruits"
            name="category"
            value={typeCategory}
            onChange={(e)=>{setTypeCategory(e.target.id)}}
          />
          <label htmlFor="fruits">Fruits</label>
          </li>
          <li>
          <input
            type="radio"
            id="beverages"
            name="category"
            value={typeCategory}
            onChange={(e)=>{setTypeCategory(e.target.id)}}
          />
          <label htmlFor="beverages">Beverages</label>
          </li>
          <li>
          <input
            type="radio"
            id="dairy"
            name="category"
            value={typeCategory}
            onChange={(e)=>{setTypeCategory(e.target.id)}}
          />
          <label htmlFor="dairy">Dairy</label>
          </li>
          <li>
          <input
            type="radio"
            id="desserts"
            name="category"
            value={typeCategory}
            onChange={(e)=>{setTypeCategory(e.target.id)}}
          />
          <label htmlFor="desserts">Desserts</label>
          </li>
          <li>
          <input
            type="radio"
            id="meat"
            name="category"value={typeCategory}
            onChange={(e)=>{setTypeCategory(e.target.id)}}
          />
          <label htmlFor="meat">Meat</label>
          </li>
          <li>
          <input
            type="radio"
            id="snacks"
            name="category"
            value={typeCategory}
            onChange={(e)=>{setTypeCategory(e.target.id)}}
          />
          <label htmlFor="snacks">Snacks</label>
          </li>
          <li>
          <input
            type="radio"
            id="cheese"
            name="category"
            value={typeCategory}
            onChange={(e)=>{setTypeCategory(e.target.id)}}
          />
          <label htmlFor="cheese">Cheese</label>
          </li>
          </ul>
        </div>
        
      </div>
      <div className={styles['content-sidebar']}>
        <div className={styles['sidebar-title']}>
          <h2>Price</h2>
        </div>
        <div>
          <ul>
          <li>
          <input
            type="radio"
            id="all-price"
            name="category"
            value={price}
            onChange={(e)=>{setPrice(e.target.id)}}
          />
          <label htmlFor="all-price">All</label>
          </li>
          <li>
          <input
            type="radio"
            id="less < 50"
            name="category"
            value={price}
            onChange={(e)=>{setPrice(e.target.id)}}
          />
          <label htmlFor="less < 50">$0 - $50</label>
          </li>
          <li>
          <input
            type="radio"
            id="50-100"
            name="category"
            value={price}
            onChange={(e)=>{setPrice(e.target.id)}}
          />
          <label htmlFor="50-100">$50 - $100</label>
          </li>
          <li>
          <input
            type="radio"
            id="100-150"
            name="category"
            value={price}
            onChange={(e)=>{setPrice(e.target.id)}}
          />
          <label htmlFor="100-150">$100 - $150</label>
          </li>
          <li>
          <input
            type="radio"
            id="above-150"
            name="category"
            value={price}
            onChange={(e)=>{setPrice(e.target.id)}}
          />
          <label htmlFor="above-150">Over $150</label>
          </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

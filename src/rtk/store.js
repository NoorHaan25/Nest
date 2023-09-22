import { configureStore } from '@reduxjs/toolkit'
 import { productsReducer } from './slices/productsSlice'
import { cartReducer } from './slices/cartSlice'
import { whishlistReducer } from './slices/whishlist'
import { usersReducer } from './slices/signUp'
import { userReducer } from './slices/usersSlice'


export const store = configureStore({
  reducer:{
    products: productsReducer,
    cart:cartReducer,
    whishlist: whishlistReducer,
    users: usersReducer,
    user : userReducer
  }
})
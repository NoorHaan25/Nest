import { createSlice } from "@reduxjs/toolkit";
const sliceName = "cartSlice";
const cartSlice = createSlice({
  name: sliceName,
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const productAdd = action.payload;
      const existingProduct = state.find((product) =>  product.id === productAdd.id);
      if (existingProduct) {
        existingProduct.count++
      } else {
        const newProduct ={...productAdd , count : 1}
        state.push(newProduct)
      }
      
    },
    removeFromCart(state , action) {
      return state.filter((product) => product.id !== action.payload.id)
    },
    increaseCount(state , action){
      const productAdd = action.payload;
      const existingProduct = state.find((product) =>  product.id === productAdd.id);
      existingProduct.count++
    },
    decreaseCount(state , action){
      const productAdd = action.payload;
      const existingProduct = state.find((product) => product.id === productAdd.id);
     
      if(existingProduct.count === 1 ){
        existingProduct.count = 1
      }else{
        existingProduct.count--
      }
    },
    clearCart() {
      return []
    },
  },
});
export const { addToCart, removeFromCart, clearCart , increaseCount , decreaseCount} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const sliceName = "whishlist";
const whishlistSlice = createSlice({
  name: sliceName,
  initialState: [],
  reducers:{
    addToWhishlist(state , action){
      const whishlistAdd = action.payload
      const existingProductWhishlist = state.find((product) =>  product.id === whishlistAdd.id);
      if(existingProductWhishlist){
        console.log('existing product');
      }else{
        const newProduct ={...whishlistAdd , count : 1}
        state.push(newProduct)
      }
      
    },
    removeFromWhislist(state , action) {
      return state.filter((product) => product.id !== action.payload.id)
    }
  }
})
export const { addToWhishlist , removeFromWhislist } = whishlistSlice.actions;
export const whishlistReducer = whishlistSlice.reducer;
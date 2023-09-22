import {  createSlice } from "@reduxjs/toolkit";

const sliceName= 'userSlice'

const usersSlice = createSlice({
  name:sliceName,
  initialState :{},
  reducers:{
    getUser(state , action){
      console.log('action' , action.payload);
      state = action.payload;
      return state 
    }

  }
})
export const {getUser} = usersSlice.actions
export const userReducer = usersSlice.reducer;

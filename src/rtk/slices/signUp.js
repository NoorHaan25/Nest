import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getClientInfo } from "../../services/api";
const sliceName = "usersSlice";
const BASE_URL = "http://localhost:9000";
export const signUsers = createAsyncThunk(
  `${sliceName}/signUsers`,async (user) => {
    const response = await axios.post(`${BASE_URL}/signUp` , user);
    console.log(response.data);
    return response.data;
  }
);
export const fetchUser = createAsyncThunk(`${sliceName}/fetchUser` , async()=>{
  const res = await getClientInfo();
  console.log(res.data);
  return res.data
})
const usersSlice = createSlice({
  name: sliceName,
  initialState: {
    userData: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    loading: false,
    error: false,
  },
  reducers: {
  },
  extraReducers: {
    [signUsers.pending]: (state) => {
      state.loading = true;
    },
    [signUsers.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    },
    [signUsers.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});
export const usersReducer = usersSlice.reducer;

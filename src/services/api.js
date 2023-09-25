import axios from "axios";
const BASE_URL = "https://api-xh9w.onrender.com";
export const getAllPosts = () => {
  return axios.get(`${BASE_URL}/postsAll`);
};
export const getPost = async () => {
  const response = await axios.get(`${BASE_URL}/postsAll`);
  const dataPostsPartOne = response.data["part-one"].posts;
  const dataPostsPartTwo = response.data["part-two"].posts;
  const data = [...dataPostsPartOne, ...dataPostsPartTwo];
  return data;
};
export const getAllProducts =  () => {
  return axios.get(`${BASE_URL}/products`);
};
export const addClientInfo =  (client) => {
  return axios.post(`${BASE_URL}/clients` , client);
};
export const getClientInfo =  () => {
  return axios.get(`${BASE_URL}/clients`);
};
export const addUserInfo = (user) => {
  return axios.post(`${BASE_URL}/signUp` , user);
}
export const getUserInfo = () => {
  return axios.get(`${BASE_URL}/signUp`);
}


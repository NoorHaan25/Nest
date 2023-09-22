import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Concat from "../Pages/Concat";
import MainLayout from "../layouts/MainLayout";
import PageOne from "../Pages/Posts/PageOne";
import PageTwo from "../Pages/Posts/PageTwo";
import PostDetails from "../Components/PostDetails";
import Products from "../Pages/Products";
import Checkout from "../Pages/Checkout";
import ViewCart from "../Pages/ViewCart";
import OrderReceived from "../Pages/OrderReceived";
import Whishlist from "../Pages/Whishlist";
import ProductDetails from "../Pages/ProductDetails";
import Beverages from "../Pages/Beverages";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Shop from "../Pages/Shop";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "about", element: <About /> },
      {
        path: "blog",
        element: <Blog />,
        children: [
          {
            path: "",
            element: <PageOne />
          },
          {
            path: "page/:id",
            element: <PageTwo />,
            children:[
              {
                path: "postdetails/:id",
                element: <PostDetails />,
              }
            ]
          },
          {
            path: "postdetails/:id",
            element: <PostDetails />,
          },
        ],
      },
      { path: "concat", element: <Concat /> },
      { path: "shop", element: <Shop /> },
      { path: "products/:typrProducts", element: <Products/>},
      { path: "checkout", element: <Checkout/>},
      { path: "viewCart" , element: <ViewCart/>},
      { path: "orderReceived", element: <OrderReceived/>},
      {path : "whishlist" , element: <Whishlist/>},
      {path:"product-details" , element: <ProductDetails/>},
      {path:"beverages-menu" , element: <Beverages/>},
      {path:"login" , element: <Login/>},
      {path:"signup" , element: <SignUp/>},
    
    ],
  },
]);

import React from "react";
// router
import { createBrowserRouter, redirect } from "react-router-dom";
// layout
import Private from "./layouts/Private.jsx";
import Public from "./layouts/Public.jsx";
import Global from "./layouts/Global.jsx";
// pages
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import UpdateProduct from "./pages/UpdateProduct.jsx";

const router = createBrowserRouter([
  {
    element: <Global />,
    children: [
      {
        element: <Private />,
        loader: () => {
          if (!localStorage.token) {
            return redirect("/login");
          }
          return null;
        },
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/product/:productId",
            element: <ProductDetail />,
          },
          {
            path: "/add-product",
            element: <AddProduct />,
          },
          {
            path: "/update-product/:productId",
            element: <UpdateProduct />,
          },
          // {
          //   path: "/youtube",
          //   element: <Youtube />,
          // },
          // {
          //   path: "/youtube/channel/:id",
          //   element: <Channel />,
          // },
        ],
      },
      {
        element: <Public />,
        children: [
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "/login",
            element: <Login />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

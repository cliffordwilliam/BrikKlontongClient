import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { request } from "../store/apiSlice.js";
import { useParams } from "react-router-dom";
import c from "../c";
import OneProductCard from "../components/OneProductCard.jsx";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  function updateProduct(data) {
    const { obj } = data;
    setProduct(obj);
  }
  function getProduct() {
    const token = localStorage.getItem("token");
    dispatch(
      request({
        method: "GET",
        url: `${c.baseUrl}/product/${productId}`,
        options: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        isLoader: true,
        // isOk: true,
        callback: updateProduct,
      })
    );
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <main>
      <section>
        <div className="📃 💪⬇️">
          <h2 className="👇2">Product Detail</h2>
          <p className="👇4">Learn more about this product!</p>
          <OneProductCard product={product} />
        </div>
      </section>
    </main>
  );
}

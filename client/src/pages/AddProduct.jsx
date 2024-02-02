import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import { useDispatch } from "react-redux";
import { request } from "../store/apiSlice.js";
import c from "../c";

export default function AddProduct() {
  const [CategoryId, setCategoryId] = useState(1);
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState(1);
  const [width, setWidth] = useState(1);
  const [length, setLength] = useState(1);
  const [height, setHeight] = useState(1);
  const [harga, setHarga] = useState(1);
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const postProduct = () => {
    const token = localStorage.getItem("token");
    dispatch(
      request({
        method: "POST",
        url: `${c.baseUrl}/product`,
        options: {
          data: {
            CategoryId: +CategoryId,
            sku,
            name,
            description,
            weight: +weight,
            width: +width,
            length: +length,
            height: +height,
            harga: +harga,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        isLoader: true,
        isOk: true,
      })
    );
  };
  return (
    <main className="🕛">
      <div className="📃 fadeInUp">
        {/* BASE FORM */}
        <form
          className="📏6 📃 💪⬇️ 🃏"
          onSubmit={(e) => {
            e.preventDefault();
            postProduct();
          }}
        >
          <h2 className="👇2">Add Product</h2>
          {/* category */}
          <div>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              onChange={(e) => {
                setCategoryId(e.target.value);
              }}
              value={CategoryId}
            >
              <option value="1">Snacks</option>
              <option value="2">Beverages</option>
              <option value="3">Groceries</option>
              <option value="4">Electronics</option>
              <option value="5">Clothing</option>
            </select>
          </div>
          {/* sku */}
          <div className="📏f">
            <label className="👇" htmlFor="sku">
              SKU:
            </label>
            <input
              className="👇5 📏f"
              type="text"
              id="sku"
              name="sku"
              required={true}
              onChange={(e) => {
                setSku(e.target.value);
              }}
              value={sku}
            />
          </div>
          {/* name */}
          <div className="📏f">
            <label className="👇" htmlFor="name">
              Name:
            </label>
            <input
              className="👇5 📏f"
              type="text"
              id="name"
              name="name"
              required={true}
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
          {/* description */}
          <div className="📏f">
            <label className="👇" htmlFor="description">
              Description:
            </label>
            <input
              className="👇5 📏f"
              type="text"
              id="description"
              name="description"
              required={true}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
            />
          </div>
          {/* weight */}
          <div className="📏f">
            <label className="👇" htmlFor="weight">
              Weight:
            </label>
            <input
              className="👇5 📏f"
              type="number"
              id="weight"
              name="weight"
              required={true}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
              value={weight}
            />
          </div>
          {/* width */}
          <div className="📏f">
            <label className="👇" htmlFor="width">
              Width:
            </label>
            <input
              className="👇5 📏f"
              type="number"
              id="width"
              name="width"
              required={true}
              onChange={(e) => {
                setWidth(e.target.value);
              }}
              value={width}
            />
          </div>
          {/* length */}
          <div className="📏f">
            <label className="👇" htmlFor="length">
              Length:
            </label>
            <input
              className="👇5 📏f"
              type="number"
              id="length"
              name="length"
              required={true}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              value={length}
            />
          </div>
          {/* height */}
          <div className="📏f">
            <label className="👇" htmlFor="height">
              Height:
            </label>
            <input
              className="👇5 📏f"
              type="number"
              id="height"
              name="height"
              required={true}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
              value={height}
            />
          </div>
          {/* harga */}
          <div className="📏f">
            <label className="👇" htmlFor="harga">
              Harga:
            </label>
            <input
              className="👇5 📏f"
              type="number"
              id="harga"
              name="harga"
              required={true}
              onChange={(e) => {
                setHarga(e.target.value);
              }}
              value={harga}
            />
          </div>
          {/* submit */}
          <button className="🛎️" type="submit">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

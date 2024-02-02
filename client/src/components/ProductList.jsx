import React from "react";
import ProductCard from "./ProductCard.jsx";

const ProductList = ({ products, productDeleteClicked }) => {
  return (
    <div className="👆7 👇5 🪟 📏f fadeInUp">
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            productDeleteClicked={productDeleteClicked}
          />
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductList;

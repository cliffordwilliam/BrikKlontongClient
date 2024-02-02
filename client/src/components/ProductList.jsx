import React from "react";
import ProductCard from "./ProductCard.jsx";

const ProductList = ({ products, onProductClicked }) => {
  return (
    <div className="👆7 👇5 🪟 📏f fadeInUp">
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onProductClicked={onProductClicked}
          />
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductList;

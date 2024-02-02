import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, productDeleteClicked }) => {
  return (
    <div className="🃏 💪⬇️">
      <img
        className="👇4 📏h4"
        src={
          // wrong seeding mitigation
          product.image === "http://placeimg.com/640/480"
            ? `https://picsum.photos/id/${product.id}/400/400`
            : product.image
        }
        alt={`Product image for ${product.name}`}
      />
      <h3 className="👇2">{product.name}</h3>
      <p className="👇4">{product.description}</p>
      <div className="💪 👆a">
        <Link className="🛎️" to={`product/${product.id}`}>
          Detail
        </Link>
        <Link className="🛎️" to={`update-product/${product.id}`}>
          Update
        </Link>
        <button
          className="🛎️"
          onClick={(e) => {
            e.preventDefault();
            productDeleteClicked(product.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

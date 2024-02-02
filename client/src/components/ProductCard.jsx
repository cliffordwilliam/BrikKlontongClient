import React from "react";

const ProductCard = ({ product, onProductClicked }) => {
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
      <button
        className="🛎️ 👆a"
        onClick={(e) => {
          onProductClicked(e, product.id);
        }}
      >
        See Detail
      </button>
    </div>
  );
};

export default ProductCard;

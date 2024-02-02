import React from "react";

const OneProductCard = ({ product }) => {
  if (!product || Object.keys(product).length === 0) {
    return <p>No product found</p>;
  }
  // date formatter
  function formatDateString(originalDateString) {
    const originalDate = new Date(originalDateString);
    const formattedDate = originalDate.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    });
    return formattedDate;
  }
  return (
    <div className="📃 💪⬇️ 🃏 👆7 fadeInUp">
      <h3 className="👇2">{product.name}</h3>
      <img
        className="👇4 📏h6"
        src={
          // wrong seeding mitigation
          product.image === "http://placeimg.com/640/480"
            ? `https://picsum.photos/id/${product.id}/400/400`
            : product.image
        }
        alt="lorem"
      />
      {/* sku */}
      <p>SKU: {product.sku}</p>
      {/* table */}
      <div style={{ overflowX: "auto" }} className="📏f 👇4">
        <table className="📏f">
          <thead>
            <tr>
              <th>Weight</th>
              <th>Width</th>
              <th>Length</th>
              <th>Height</th>
              <th>Harga</th>
              <th>Category</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{product.weight}</td>
              <td>{product.width}</td>
              <td>{product.length}</td>
              <td>{product.height}</td>
              <td>{product.harga}</td>
              <td>{product.Category.name}</td>
              <td>{formatDateString(product.createdAt)}</td>
              <td>{formatDateString(product.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="🦵 👇4">{product.description}</p>
    </div>
  );
};

export default OneProductCard;

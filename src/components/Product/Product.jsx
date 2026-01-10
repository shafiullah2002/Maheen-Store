import React from "react";
import { useStateValue } from "../context/StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(i <= rating ? "⭐" : "☆");
  }

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
      {/* Title */}
      <h4 className="text-center font-medium text-gray-800 mb-2">{title}</h4>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-40 w-auto object-contain mb-2"
      />

      {/* Rating */}
      <div className="text-yellow-500 mb-2">{stars.join("")}</div>

      {/* Price */}
      <p className="text-lg font-bold text-gray-900 mb-4">${price}</p>

      {/* Add to Basket Button */}
      <button
        onClick={addToBasket}
        className="bg-amazon_blue text-white px-4 py-2 rounded hover:bg-amazon_yellow hover:text-black transition-colors duration-200"
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;

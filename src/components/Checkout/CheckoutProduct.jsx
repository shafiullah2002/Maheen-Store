import React from 'react';
import { useStateValue } from '../context/StateProvider'

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <div className="flex items-start bg-white p-4 rounded-lg shadow-md mb-4">
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 object-contain mr-4"
      />

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Title below the image on top */}
        <p className="text-gray-800 font-medium text-sm mb-1">{title}</p>

        {/* Price */}
        <p className="text-gray-900 font-bold mb-1">
          <span className="text-sm">$</span>{price}
        </p>

        {/* Rating */}
        <div className="flex text-yellow-500 mb-2">
          {Array(rating).fill().map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>

        {/* Remove button */}
        <button
          onClick={removeFromBasket}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors duration-200 text-sm w-max"
        >
          Remove from Basket
        </button>
      </div>
    </div>
  )
}

export default CheckoutProduct;

import React from "react";
import { useStateValue } from "../context/StateProvider";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const navigate = useNavigate();

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0) || 0;

  const proceedToShipping = () => {
    navigate("/checkout/shipping");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start space-y-4 w-full max-w-md">
      <h2 className="text-lg font-semibold">
        Subtotal ({basket?.length} items):{" "}
        <span className="font-bold">
          ${getBasketTotal(basket).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
        </span>
      </h2>
      <label className="flex items-center text-sm">
        <input type="checkbox" className="mr-2" />
        This order contains a gift
      </label>
      <button
        onClick={proceedToShipping}
        className="w-full bg-amazon_blue text-white py-2 rounded hover:bg-amazon_yellow hover:text-black transition-colors duration-200"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;

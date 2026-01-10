// src/components/Checkout/Checkout.jsx
import React from 'react';
import { useStateValue } from "../context/StateProvider.jsx";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row p-4 lg:p-8 gap-6">
      {/* Left Side */}
      <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
        <img
          className="w-full mb-4 rounded"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad banner"
        />

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            Hello, {user ? user.email : 'Guest'}
          </h2>
          <h2 className="text-2xl font-bold border-b pb-2 mb-2">
            Your Shopping Basket
          </h2>

          {basket?.length === 0 ? (
            <p className="text-gray-600">Your basket is empty</p>
          ) : (
            basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          )}
        </div>
      </div>

      {/* Right Side - Subtotal */}
      <div className="w-full lg:w-1/3 bg-white p-4 rounded-lg shadow-md h-fit">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

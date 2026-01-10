import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';

function OrderSuccess() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [{ user }] = useStateValue();

  const orderDetails = state?.orderDetails || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Order Placed Successfully!</h1>
        
        <p className="text-gray-700 mb-4">
          Thank you for your order, <span className="font-semibold">{user?.email || orderDetails.fullName || 'Customer'}</span>!
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-4 text-left">
          <h3 className="font-semibold mb-2">Delivery Address:</h3>
          <p>{orderDetails.fullName}</p>
          <p>{orderDetails.address}</p>
          <p>{orderDetails.city} - {orderDetails.zipCode}</p>
          <p>Phone: {orderDetails.phone}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-4 text-left">
          <h3 className="font-semibold mb-2">Estimated Delivery</h3>
          <p>Within <strong>5 working days</strong></p>
          <p>Our team will contact you shortly on your phone number to confirm.</p>
        </div>

        <p className="text-gray-500 mb-4">Redirecting to home page in 3 seconds...</p>

        <button
          onClick={() => navigate('/')}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Go to Home Now
        </button>
      </div>
    </div>
  );
}

export default OrderSuccess;

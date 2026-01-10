import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';

function ShippingDetails() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10,11}$/.test(formData.phone))
      newErrors.phone = 'Enter valid 10-11 digit phone number';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Clear the basket
    dispatch({ type: 'CLEAR_BASKET' });

    // Navigate to OrderSuccess page with form data
    navigate('/checkout/shipping/order-success', { state: { orderDetails: formData } });
  };

  return (
    <div className="min-h-screen flex justify-center items-start p-6 bg-gray-100">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 mt-6">
        <h2 className="text-2xl font-bold mb-2">Delivery Information (Cash on Delivery)</h2>
        <p className="text-sm text-gray-500 mb-6">
          We deliver within 5 working days in major cities of Pakistan
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.fullName && <span className="text-red-500 text-sm mt-1">{errors.fullName}</span>}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">
              Phone Number * (for delivery confirmation)
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="03XXXXXXXXX"
              value={formData.phone}
              onChange={handleChange}
              className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone}</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Email (optional)</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Complete Address *</label>
            <textarea
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none ${
                errors.address ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.address && <span className="text-red-500 text-sm mt-1">{errors.address}</span>}
          </div>

          {/* City */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">City *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none ${
                errors.city ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.city && <span className="text-red-500 text-sm mt-1">{errors.city}</span>}
          </div>

          {/* Zip Code */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Postal/Zip Code *</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none ${
                errors.zipCode ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.zipCode && <span className="text-red-500 text-sm mt-1">{errors.zipCode}</span>}
          </div>

          {/* Notes */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Delivery Notes (optional)</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="e.g., deliver after 6 PM"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Place Order (Cash on Delivery)
          </button>
        </form>
      </div>
    </div>
  );
}

export default ShippingDetails;

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import ShippingDetails from "./components/Checkout/ShippingDetails.jsx";
import OrderSuccess from "./components/Checkout/OrderSuccess.jsx";
import Footer from "./components/Footer/Footer.jsx";

// ← Add this import – this is what was missing!
import { auth } from "./components/firebase";

// You also need dispatch from your context
import { useStateValue } from "./components/context/StateProvider"; // adjust path if needed

function App() {
  const [{}, dispatch] = useStateValue(); // ← get dispatch from context

  useEffect(() => {
    // Listen to auth state changes
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // User is logged in / just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // User is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // Cleanup subscription when component unmounts
    return () => unsubscribe();
  }, [dispatch]); // ← add dispatch to dependency array (good practice)

  return (
    <Router>
      <div className="app">
        {/* Header appears on ALL pages */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/shipping" element={<ShippingDetails />} />
          <Route path="/checkout/shipping/order-success" element={<OrderSuccess />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";
import Amazonelogo from "../assets/images/Amazonlogo.png";
import { useStateValue } from "./context/StateProvider";
import { auth } from './firebase';
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut().then(() => console.log("Signed out")).catch(err => console.error(err));
    } else {
      navigate("/login");
    }
  };

  const navigateToCart = () => {
    navigate("/checkout");
  };

  return (
    <header className="bg-amazon_blue text-white sticky top-0 z-50">
      <div className="flex items-center p-2 px-4">
        {/* Logo */}
        <img
          src={Amazonelogo}
          alt="Amazon Logo"
          className="h-10 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Search Bar */}
        <div className="flex flex-grow items-center mx-4 bg-yellow-400 hover:bg-yellow-500 rounded-md">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow p-2 rounded-l-md outline-none text-black"
          />
          <button className="p-2">
            <SearchIcon />
          </button>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center space-x-6 text-xs md:text-sm">
          {/* Authentication */}
          <div
            onClick={handleAuthentication}
            className="cursor-pointer hover:underline"
          >
            <p>Hello, {!user ? "Guest" : user.email.split("@")[0]}</p>
            <p className="font-bold">{user ? "Sign Out" : "Sign In"}</p>
          </div>

          {/* Accounts & Lists */}
          <div className="hover:underline cursor-pointer">
            <p>Accounts & Lists</p>
          </div>

          {/* Returns & Orders */}
          <div className="hover:underline cursor-pointer">
            <p>Returns</p>
            <p className="font-bold">& Orders</p>
          </div>

          {/* Prime */}
          <div className="hover:underline cursor-pointer">
            <p>Try</p>
            <p className="font-bold">Prime</p>
          </div>

          {/* Basket */}
          <div
            onClick={navigateToCart}
            className="flex items-center cursor-pointer hover:underline"
          >
            <Badge badgeContent={basket?.length || 0} color="error">
              <ShoppingCartIcon fontSize="large" />
            </Badge>
            <p className="ml-1 font-bold">Cart</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Amazonelogo from "../assets/images/Amazonlogo.png";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./firebase";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const navigate = useNavigate();
  const [{ basket, user }] = useStateValue();
  const [open, setOpen] = useState(false);

  const handleAuthentication = () => {
    if (user) auth.signOut();
    else navigate("/login");
  };

  return (
    <>
      {/* HEADER */}
      <header className="bg-amazon_blue text-white sticky top-0 z-50">
        <div className="flex items-center px-3 py-2 gap-3">

          {/* LOGO */}
          <img
            src={Amazonelogo}
            alt="Amazon"
            className="h-9 cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* SEARCH */}
          <div className="flex flex-1 bg-yellow-400 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search Maheen Store..."
              className="flex-grow px-3 py-2 text-black outline-none text-sm"
            />
            <button className="px-3 text-black">
              <SearchIcon />
            </button>
          </div>

          {/* DESKTOP MENU (SAME ROW) */}
          <div className="hidden md:flex items-center gap-6 text-sm whitespace-nowrap">
            <div onClick={handleAuthentication} className="cursor-pointer">
              <p>Hello, {user ? user.email.split("@")[0] : "Guest"}</p>
              <p className="font-bold">{user ? "Sign Out" : "Sign In"}</p>
            </div>

            <p className="cursor-pointer">Accounts & Lists</p>
            <p className="cursor-pointer">Returns & Orders</p>
            <p className="cursor-pointer font-bold">Prime</p>
          </div>

          {/* CART */}
          <div
            onClick={() => navigate("/checkout")}
            className="cursor-pointer"
          >
            <Badge badgeContent={basket?.length || 0} color="error">
              <ShoppingCartIcon />
            </Badge>
          </div>

          {/* HAMBURGER (MOBILE ONLY) */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50">
          <div className="bg-white text-black w-64 h-full p-4">
            <button
              className="mb-4"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>

            <div
              onClick={handleAuthentication}
              className="mb-4 cursor-pointer"
            >
              <p className="font-bold">
                {user ? "Sign Out" : "Sign In"}
              </p>
            </div>

            <p className="mb-3 cursor-pointer">Accounts & Lists</p>
            <p className="mb-3 cursor-pointer">Returns & Orders</p>
            <p className="mb-3 cursor-pointer font-bold">Prime</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;

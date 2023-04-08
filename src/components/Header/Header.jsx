import React from "react";
import logo from "../../assets/images/Logo.svg";
import "../Header/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="brand-logo" />
      <div>
        <Link to="/orders">Order</Link>
        <Link to="/review">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;

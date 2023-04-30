import React, { useContext } from "react";
import logo from "../../assets/images/Logo.svg";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(()=>{}).catch(error=>{console.error(error.message)})
  }

  return (
    <nav className="header">
      <img src={logo} alt="brand-logo" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signUp">Sign Up</Link>
        {
          user && <span className="user-email">Welcome {user.email} <button onClick={handleLogOut} className="btn-signOut">Log Out</button> </span>
        }
      </div>
    </nav>
  );
};

export default Header;

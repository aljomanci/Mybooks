import { useContext } from "react";
import { dataContext } from "../context/DataContext";

import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import TotalItems from "../CartContent/TotalItems";

import React from "react";
const Navbar = () => {
  const { cart } = useContext(dataContext);
  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to="/">
          <h1 className="navbar-logo">Home</h1>
        </Link>
        <Link to="/">
          <h2 className="informacion">Store</h2>
        </Link>
        <Link to="/about">
          <h2 className="informacion">About us</h2>
        </Link>
        <Link to="/contact">
          <h2 className="informacion">Contact</h2>
        </Link>

        <Link className="seeCarrito" to={"/cart"}>
          🛒
          {cart.lenght > 0 ? <TotalItems /> : null}
          <TotalItems />
        </Link>

        <Link to="/">
          <button
            onClick={() => window.location.reload(false)}
            className="logout"
          >
            Logout
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

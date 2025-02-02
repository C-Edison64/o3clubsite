// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    padding: "10px",
    backgroundColor: "#f2f2f2",
    textAlign: "center",
  };

  const linkStyle = {
    margin: "0 15px",
    textDecoration: "none",
    color: "#333",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/booking" style={linkStyle}>
        Booking
      </Link>
      <Link to="/products" style={linkStyle}>
        Products
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;

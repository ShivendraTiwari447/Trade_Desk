import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        height: "70px",
        borderBottom: "1px solid #eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 7%",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Logo - Click to go Home */}
      <Link to="/">
        <img
          src="https://zerodha.com/static/images/logo.svg"
          alt="Zerodha"
          style={{
            width: "130px",
            display: "block",
          }}
        />
      </Link>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "35px",
        }}
      >
        <Link to="/signup" style={linkStyle}>
          Signup
        </Link>

        <Link to="/about" style={linkStyle}>
          About
        </Link>

        <Link to="/products" style={linkStyle}>
          Products
        </Link>

        <Link to="/pricing" style={linkStyle}>
          Pricing
        </Link>

        <Link to="/support" style={linkStyle}>
          Support
        </Link>

        {/* Menu */}
        <div
          style={{
            width: "25px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            cursor: "pointer",
          }}
        >
          <span style={menuLine}></span>
          <span style={menuLine}></span>
          <span style={menuLine}></span>
        </div>
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#424242",
  fontSize: "15px",
};

const menuLine = {
  width: "25px",
  height: "2px",
  backgroundColor: "#424242",
  display: "block",
};

export default Navbar;
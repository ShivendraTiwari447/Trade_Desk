import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";

function AboutPage() {
  return (
    <>
      

      <div
        style={{
          minHeight: "70vh",
          padding: "100px 7%",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "500",
            marginBottom: "20px",
          }}
        >
          About Us
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#666",
          }}
        >
          Welcome to our company!
        </p>
      </div>

    
    </>
  );
}

export default AboutPage;
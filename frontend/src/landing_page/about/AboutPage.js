import React from "react";
import Hero from "./Hero";
import Team from "./Team";

function AboutPage() {
  return (
    <>
      <div
        style={{
          padding: "45px 7% 35px",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "500",
            color: "#424242",
            marginBottom: "12px",
          }}
        >
          About Us
        </h1>

        <p
          style={{
            fontSize: "17px",
            color: "#666",
            margin: "0",
          }}
        >
          Welcome to our company!
        </p>
      </div>

      <Hero />
      <Team />
    </>
  );
}

export default AboutPage;
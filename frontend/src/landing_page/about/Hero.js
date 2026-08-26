import React from "react";

function About() {
  return (
    <section
      style={{
        padding: "70px 12%",
        fontFamily: "Arial, sans-serif",
        color: "#424242",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "500",
          marginBottom: "35px",
        }}
      >
        We are building a simpler way to invest.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          lineHeight: "1.8",
          fontSize: "16px",
          color: "#555",
        }}
      >
        <div>
          <p>
            TradeDesk was built with a simple goal — to make investing and
            trading easier, more transparent, and accessible to everyone.
          </p>

          <p>
            Our platform combines intuitive design with powerful technology
            to remove the complexity that investors often face while
            navigating the financial markets.
          </p>

          <p>
            From tracking investments to discovering market opportunities,
            TradeDesk provides the tools you need to make informed decisions.
          </p>
        </div>

        <div>
          <p>
            We believe technology can make financial markets more accessible
            for a new generation of investors.
          </p>

          <p>
            Our ecosystem is designed around simplicity, performance, and
            transparency, helping users manage their investments from a
            single platform.
          </p>

          <p>
            And we are constantly improving. New features, better tools, and
            smarter experiences are always being built for our users.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
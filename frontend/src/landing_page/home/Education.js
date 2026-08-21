import React from "react";

function Education() {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "500",
            marginBottom: "15px",
          }}
        >
          Education
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#666",
          }}
        >
          Learn everything about investing and trading
        </p>
      </div>

      {/* Education Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "50px",
        }}
      >
        {/* Varsity */}
        <div
          style={{
            padding: "35px",
            border: "1px solid #eee",
            borderRadius: "10px",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "500",
              marginBottom: "20px",
            }}
          >
            Varsity
          </h2>

          <p
            style={{
              color: "#666",
              lineHeight: "1.8",
              fontSize: "16px",
            }}
          >
            An extensive collection of stock market lessons and
            educational content. Learn about stocks, trading,
            technical analysis, fundamental analysis and more.
          </p>

          <a
            href="#"
            style={{
              display: "inline-block",
              marginTop: "15px",
              color: "#387ed1",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            Explore Varsity →
          </a>
        </div>

        {/* TradingQ&A */}
        <div
          style={{
            padding: "35px",
            border: "1px solid #eee",
            borderRadius: "10px",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "500",
              marginBottom: "20px",
            }}
          >
            TradingQ&A
          </h2>

          <p
            style={{
              color: "#666",
              lineHeight: "1.8",
              fontSize: "16px",
            }}
          >
            Get answers to your questions about trading and
            investing from a community of traders and investors.
          </p>

          <a
            href="#"
            style={{
              display: "inline-block",
              marginTop: "15px",
              color: "#387ed1",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            Visit TradingQ&A →
          </a>
        </div>

        {/* Varsity Mobile */}
        <div
          style={{
            padding: "35px",
            border: "1px solid #eee",
            borderRadius: "10px",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "500",
              marginBottom: "20px",
            }}
          >
            Varsity Mobile App
          </h2>

          <p
            style={{
              color: "#666",
              lineHeight: "1.8",
              fontSize: "16px",
            }}
          >
            Learn about the stock market anytime, anywhere with
            easy-to-understand lessons available on your mobile.
          </p>

          <a
            href="#"
            style={{
              display: "inline-block",
              marginTop: "15px",
              color: "#387ed1",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            Learn More →
          </a>
        </div>

        {/* Zerodha Educate */}
        <div
          style={{
            padding: "35px",
            border: "1px solid #eee",
            borderRadius: "10px",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "500",
              marginBottom: "20px",
            }}
          >
            Learn & Grow
          </h2>

          <p
            style={{
              color: "#666",
              lineHeight: "1.8",
              fontSize: "16px",
            }}
          >
            Improve your financial knowledge with useful
            resources, guides and practical information about
            investing.
          </p>

          <a
            href="#"
            style={{
              display: "inline-block",
              marginTop: "15px",
              color: "#387ed1",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            Start Learning →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
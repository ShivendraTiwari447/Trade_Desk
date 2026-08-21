import React from "react";

function Pricing() {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "70px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "55px" }}>
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "500",
            marginBottom: "15px",
          }}
        >
          Charges
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#666",
          }}
        >
          List of all charges and taxes
        </p>
      </div>

      {/* Pricing Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
        }}
      >
        {/* Equity Delivery */}
        <div
          style={{
            textAlign: "center",
            padding: "35px 25px",
            border: "1px solid #eee",
            borderRadius: "10px",
          }}
        >
          <img
            src="https://zerodha.com/static/images/pricing-eq.svg"
            alt="Equity Delivery"
            style={{
              width: "70px",
              height: "70px",
              marginBottom: "25px",
            }}
          />

          <h2
            style={{
              fontSize: "22px",
              fontWeight: "500",
              marginBottom: "18px",
            }}
          >
            Free equity delivery
          </h2>

          <p
            style={{
              color: "#666",
              lineHeight: "1.7",
              fontSize: "15px",
            }}
          >
            All equity delivery investments (NSE, BSE), are absolutely
            free — ₹ 0 brokerage.
          </p>
        </div>

        {/* Intraday and F&O */}
        <div
          style={{
            textAlign: "center",
            padding: "35px 25px",
            border: "1px solid #eee",
            borderRadius: "10px",
          }}
        >
          <img
            src="https://zerodha.com/static/images/other-trades.svg"
            alt="Intraday and F&O"
            style={{
              width: "70px",
              height: "70px",
              marginBottom: "25px",
            }}
          />

          <h2
            style={{
              fontSize: "22px",
              fontWeight: "500",
              marginBottom: "18px",
            }}
          >
            Intraday and F&O trades
          </h2>

          <p
            style={{
              color: "#666",
              lineHeight: "1.7",
              fontSize: "15px",
            }}
          >
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order
            on intraday trades across equity, currency, and commodity
            trades.
          </p>

          <p
            style={{
              color: "#666",
              lineHeight: "1.7",
              fontSize: "15px",
            }}
          >
            Flat ₹ 20 on all option trades.
          </p>
        </div>

        {/* Direct Mutual Funds */}
        <div
          style={{
            textAlign: "center",
            padding: "35px 25px",
            border: "1px solid #eee",
            borderRadius: "10px",
          }}
        >
          <img
            src="https://zerodha.com/static/images/pricing-eq.svg"
            alt="Direct Mutual Funds"
            style={{
              width: "70px",
              height: "70px",
              marginBottom: "25px",
            }}
          />

          <h2
            style={{
              fontSize: "22px",
              fontWeight: "500",
              marginBottom: "18px",
            }}
          >
            Free direct MF
          </h2>

          <p
            style={{
              color: "#666",
              lineHeight: "1.7",
              fontSize: "15px",
            }}
          >
            All direct mutual fund investments are absolutely free —
            ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
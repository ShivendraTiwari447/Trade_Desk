import React from "react";

function OpenAccount() {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Main Section */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "500",
            marginBottom: "20px",
          }}
        >
          Open a Zerodha account
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#666",
            lineHeight: "1.7",
          }}
        >
          Modern platforms and apps, ₹0 investments, and flat ₹20
          intraday and F&O trades.
        </p>

        {/* Form */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "35px",
          }}
        >
          <input
            type="text"
            placeholder="Enter your mobile number"
            style={{
              width: "300px",
              padding: "14px 16px",
              border: "1px solid #ccc",
              borderRadius: "4px 0 0 4px",
              fontSize: "15px",
              outline: "none",
            }}
          />

          <button
            style={{
              padding: "14px 25px",
              border: "none",
              backgroundColor: "#387ed1",
              color: "#fff",
              fontSize: "15px",
              borderRadius: "0 4px 4px 0",
              cursor: "pointer",
            }}
          >
            Continue
          </button>
        </div>

        <p
          style={{
            marginTop: "20px",
            fontSize: "13px",
            color: "#888",
          }}
        >
          By continuing, you agree to our terms and conditions.
        </p>
      </div>

      {/* Benefits */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          marginTop: "80px",
        }}
      >
        {/* Benefit 1 */}
        <div style={{ textAlign: "center", padding: "25px" }}>
          <div
            style={{
              fontSize: "40px",
              marginBottom: "15px",
            }}
          >
            ₹
          </div>

          <h3
            style={{
              fontWeight: "500",
              marginBottom: "12px",
            }}
          >
            ₹0 account opening
          </h3>

          <p
            style={{
              color: "#666",
              lineHeight: "1.6",
              fontSize: "15px",
            }}
          >
            Open your trading and investing account completely online.
          </p>
        </div>

        {/* Benefit 2 */}
        <div style={{ textAlign: "center", padding: "25px" }}>
          <div
            style={{
              fontSize: "40px",
              marginBottom: "15px",
            }}
          >
            📈
          </div>

          <h3
            style={{
              fontWeight: "500",
              marginBottom: "12px",
            }}
          >
            Simple investing
          </h3>

          <p
            style={{
              color: "#666",
              lineHeight: "1.6",
              fontSize: "15px",
            }}
          >
            Invest in stocks, mutual funds, IPOs and more from one platform.
          </p>
        </div>

        {/* Benefit 3 */}
        <div style={{ textAlign: "center", padding: "25px" }}>
          <div
            style={{
              fontSize: "40px",
              marginBottom: "15px",
            }}
          >
            ⚡
          </div>

          <h3
            style={{
              fontWeight: "500",
              marginBottom: "12px",
            }}
          >
            Fast & secure
          </h3>

          <p
            style={{
              color: "#666",
              lineHeight: "1.6",
              fontSize: "15px",
            }}
          >
            A secure and reliable platform designed for modern investors.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
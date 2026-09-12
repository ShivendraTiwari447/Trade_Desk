import React from "react";

function Hero() {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#f8f8f8",
        minHeight: "220px",
      }}
    >
      <div className="container-fluid px-4 px-md-5">

        {/* Heading + My Tickets */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1
            className="mb-0"
            style={{
              fontSize: "48px",
              fontWeight: "500",
              color: "#424242",
            }}
          >
            Support Portal
          </h1>

          <button
            className="btn text-white px-4 py-2"
            style={{
              backgroundColor: "#387ed1",
              fontSize: "18px",
              borderRadius: "4px",
            }}
          >
            My tickets
          </button>
        </div>

        {/* Search Box */}
        <div
          className="bg-white border rounded d-flex align-items-center px-4"
          style={{
            height: "75px",
            borderColor: "#ddd",
          }}
        >
          <span
            className="me-3"
            style={{
              fontSize: "28px",
              color: "#555",
            }}
          >
            ⌕
          </span>

          <input
            type="text"
            className="form-control border-0 shadow-none"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
            style={{
              fontSize: "20px",
              color: "#555",
            }}
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
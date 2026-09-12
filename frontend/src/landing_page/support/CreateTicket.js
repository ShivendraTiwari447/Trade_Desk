import React, { useState } from "react";

function CreateTicket() {
  const [open, setOpen] = useState(null);

  const categories = [
    {
      title: "Account Opening",
      icon: "⊕",
      options: [
        "Online account opening",
        "Documents required",
        "Track account opening",
        "Account opening charges",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: "◎",
      options: [
        "Profile and account details",
        "Change mobile number",
        "Change email address",
        "Account related queries",
      ],
    },
    {
      title: "Kite",
      icon: "⌁",
      options: [
        "Login and password",
        "Orders and trades",
        "Kite trading issues",
        "Kite user manual",
      ],
    },
    {
      title: "Funds",
      icon: "₹",
      options: [
        "Add funds",
        "Withdraw funds",
        "Fund transfer",
        "Withdrawal related queries",
      ],
    },
    {
      title: "Console",
      icon: "◉",
      options: [
        "Console reports",
        "Tax reports",
        "Account statements",
        "Profile related queries",
      ],
    },
    {
      title: "Coin",
      icon: "◌",
      options: [
        "Mutual funds",
        "SIP related queries",
        "Coin login issues",
        "Mutual fund withdrawal",
      ],
    },
  ];

  const quickLinks = [
    "Track account opening",
    "Track segment activation",
    "Intraday margins",
    "Kite user manual",
    "Learn how to create a ticket",
  ];

  return (
    <section
      className="container-fluid"
      style={{
        padding: "55px 7% 80px",
        backgroundColor: "#fff",
      }}
    >
      <div className="row g-5">

        {/* ================= LEFT ================= */}
        <div className="col-lg-8">

          {categories.map((category, index) => {
            const isOpen = open === index;

            return (
              <div
                key={category.title}
                className="mb-4"
                style={{
                  border: isOpen
                    ? "1px solid #d7dce1"
                    : "1px solid #e5e8eb",
                  borderRadius: "3px",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  transition: "all 0.2s ease",
                  boxShadow: isOpen
                    ? "0 3px 12px rgba(0,0,0,0.05)"
                    : "0 1px 2px rgba(0,0,0,0.02)",
                }}
              >

                {/* HEADER */}
                <div
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="d-flex align-items-center"
                  style={{
                    minHeight: "78px",
                    cursor: "pointer",
                  }}
                >

                  {/* ICON BOX */}
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "76px",
                      alignSelf: "stretch",
                      backgroundColor: "#f8fafc",
                      borderRight: "1px solid #edf0f2",
                      color: "#387ed1",
                      fontSize: "27px",
                      fontWeight: "400",
                    }}
                  >
                    {category.icon}
                  </div>

                  {/* TITLE */}
                  <div className="flex-grow-1 px-4">
                    <h4
                      className="mb-0"
                      style={{
                        color: "#333",
                        fontSize: "20px",
                        fontWeight: "500",
                        letterSpacing: "0.1px",
                      }}
                    >
                      {category.title}
                    </h4>
                  </div>

                  {/* THICK ARROW */}
                  <div
                    className="d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "42px",
                      height: "42px",
                      color: "#387ed1",
                      fontSize: "27px",
                      fontWeight: "700",
                      transition: "transform 0.2s ease",
                      transform: isOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        lineHeight: "1",
                        transform: "translateY(-3px)",
                      }}
                    >
                      ⌄
                    </span>
                  </div>
                </div>

                {/* OPTIONS */}
                {isOpen && (
                  <div
                    style={{
                      borderTop: "1px solid #edf0f2",
                      backgroundColor: "#fff",
                      padding: "8px 0",
                    }}
                  >
                    {category.options.map((option, optionIndex) => (
                      <div
                        key={option}
                        className="d-flex align-items-center"
                        style={{
                          padding: "13px 30px 13px 96px",
                          color: "#387ed1",
                          fontSize: "15px",
                          cursor: "pointer",
                          borderBottom:
                            optionIndex !== category.options.length - 1
                              ? "1px solid #f2f3f4"
                              : "none",
                          transition: "background-color 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "#f8fafc";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "#fff";
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================= RIGHT ================= */}
        <div className="col-lg-4">

          {/* ANNOUNCEMENTS */}
          <div
            style={{
              backgroundColor: "#fff7ed",
              borderLeft: "8px solid #ff8c00",
              padding: "22px 24px",
              marginBottom: "26px",
            }}
          >
            <ul
              className="mb-0"
              style={{
                paddingLeft: "20px",
              }}
            >
              <li
                style={{
                  marginBottom: "18px",
                  paddingLeft: "4px",
                }}
              >
                <a
                  href="/"
                  style={{
                    color: "#387ed1",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  Trading holiday on account of Ganesh Chaturthi on
                  September 14, 2026
                </a>
              </li>

              <li style={{ paddingLeft: "4px" }}>
                <a
                  href="/"
                  style={{
                    color: "#387ed1",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div
            style={{
              border: "1px solid #e5e8eb",
            }}
          >
            <div
              style={{
                backgroundColor: "#f7f7f7",
                padding: "19px 24px",
                borderBottom: "1px solid #e5e8eb",
              }}
            >
              <h4
                className="mb-0"
                style={{
                  color: "#333",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Quick links
              </h4>
            </div>

            {quickLinks.map((link, index) => (
              <div
                key={link}
                style={{
                  padding: "18px 24px",
                  borderBottom:
                    index !== quickLinks.length - 1
                      ? "1px solid #e9ecef"
                      : "none",
                }}
              >
                <a
                  href="/"
                  style={{
                    color: "#387ed1",
                    fontSize: "16px",
                    textDecoration: "none",
                  }}
                >
                  {index + 1}. {link}
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default CreateTicket;
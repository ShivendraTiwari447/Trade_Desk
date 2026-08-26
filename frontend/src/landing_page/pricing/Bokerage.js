import React from "react";
import "./Brokerage.css";

function Brokerage() {
  return (
    <div className="container brokerage-page">

      {/* Hero Section */}
      <section className="brokerage-hero text-center">
        <h1>Brokerage</h1>

        <p className="brokerage-subtitle">
          Free equity delivery and flat ₹20 intraday and F&O trades
        </p>
      </section>

      {/* Brokerage Cards */}
      <section className="container brokerage-cards">
        <div className="row justify-content-center g-4">

          {/* Equity Delivery */}
          <div className="col-md-5">
            <div className="card brokerage-card h-100 text-center">
              <div className="card-body">
                <div className="brokerage-icon">
                  0
                </div>

                <h3>Equity Delivery</h3>

                <p>
                  Free equity delivery trades. No brokerage charges on
                  buying or selling stocks for delivery.
                </p>

                <a href="#" className="btn btn-outline-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>

          {/* Intraday */}
          <div className="col-md-5">
            <div className="card brokerage-card h-100 text-center">
              <div className="card-body">
                <div className="brokerage-icon">
                  ₹20
                </div>

                <h3>Intraday</h3>

                <p>
                  Flat ₹20 or 0.03% per executed order, whichever is lower,
                  for intraday trades.
                </p>

                <a href="#" className="btn btn-outline-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>

          {/* F&O */}
          <div className="col-md-5">
            <div className="card brokerage-card h-100 text-center">
              <div className="card-body">
                <div className="brokerage-icon">
                  ₹20
                </div>

                <h3>Futures & Options</h3>

                <p>
                  Flat ₹20 per executed order for futures and options
                  trades.
                </p>

                <a href="#" className="btn btn-outline-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>

          {/* Mutual Funds */}
          <div className="col-md-5">
            <div className="card brokerage-card h-100 text-center">
              <div className="card-body">
                <div className="brokerage-icon">
                  0
                </div>

                <h3>Mutual Funds</h3>

                <p>
                  Invest in direct mutual funds with zero commission
                  and zero brokerage.
                </p>

                <a href="#" className="btn btn-outline-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Note */}
      <section className="brokerage-note text-center">
        <h2>Simple and transparent pricing</h2>

        <p>
          No hidden charges. Know exactly what you pay before you trade.
        </p>

        <button className="btn btn-primary">
          View complete pricing
        </button>
      </section>

    </div>
  );
}

export default Brokerage;
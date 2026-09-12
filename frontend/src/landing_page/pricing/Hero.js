import React from "react";

function Hero() {
  return (
    <section className="container py-5">
      {/* Heading */}
      <div className="text-center pt-2 mb-5">
        <h1 className="fw-normal mb-3">Charges</h1>
        <p className="text-muted fs-5">
          List of all charges and taxes
        </p>
      </div>

      {/* Pricing */}
      <div className="row text-center mt-5 pt-4">

        {/* Equity */}
        <div className="col-lg-4 col-md-4 mb-5">
          <img
            src="/media/images/pricing-eq.svg"
            alt="Equity Delivery"
            className="img-fluid mb-4"
            style={{ width: "180px", height: "150px" }}
          />

          <h2 className="fw-normal fs-3 mb-4">
            Free equity delivery
          </h2>

          <p className="text-muted lh-lg mx-auto" style={{ maxWidth: "390px" }}>
            All equity delivery investments (NSE, BSE), are absolutely
            free — ₹ 0 brokerage.
          </p>
        </div>

        {/* Intraday */}
        <div className="col-lg-4 col-md-4 mb-5">
          <img
            src="/media/images/other-trades.svg"
            alt="Intraday and F&O"
            className="img-fluid mb-4"
            style={{ width: "180px", height: "150px" }}
          />

          <h2 className="fw-normal fs-3 mb-4">
            Intraday and F&O trades
          </h2>

          <p className="text-muted lh-lg mx-auto" style={{ maxWidth: "390px" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order
            on intraday trades across equity, currency, and commodity
            trades. Flat ₹20 on all option trades.
          </p>
        </div>

        {/* Mutual Funds */}
        <div className="col-lg-4 col-md-4 mb-5">
          <img
            src="/media/images/pricing-eq.svg"
            alt="Direct Mutual Funds"
            className="img-fluid mb-4"
            style={{ width: "180px", height: "150px" }}
          />

          <h2 className="fw-normal fs-3 mb-4">
            Free direct MF
          </h2>

          <p className="text-muted lh-lg mx-auto" style={{ maxWidth: "390px" }}>
            All direct mutual fund investments are absolutely free —
            ₹ 0 commissions &amp; DP charges.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Hero;
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function Hero() {
  return (
    <>
      {/* Products Hero */}
      <section
        style={{
          padding: "90px 10% 70px",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: "44px",
            fontWeight: "500",
            color: "#424242",
          }}
        >
          Zerodha Products
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#666",
            marginTop: "20px",
          }}
        >
          Sleek, modern, and intuitive trading platforms
        </p>

        <a
          href="#"
          style={{
            display: "inline-block",
            marginTop: "25px",
            color: "#387ed1",
            textDecoration: "none",
          }}
        >
          Check out our investment offerings →
        </a>
      </section>

      {/* Kite */}
      <LeftSection
        image="/media/images/products-kite.png"
        title="Kite"
        description="Our ultra-light trading platform, built for speed, simplicity, and ease of use. Trade stocks, derivatives, mutual funds, and more with powerful charts and intuitive tools."
        link="Learn more about Kite →"
      />

      {/* Console */}
      <RightSection
        image="/media/images/products-console.png"
        title="Console"
        description="The central dashboard for your investments. Track your portfolio, analyze your trades, view detailed reports, and get a complete picture of your investments."
        link="Learn more about Console →"
      />

      {/* Coin */}
      <LeftSection
        image="/media/images/products-coin.png"
        title="Coin"
        description="Invest in direct mutual funds with zero commissions. Build your mutual fund portfolio with a simple and convenient investing experience."
        link="Learn more about Coin →"
      />

      {/* Kite Connect */}
      <RightSection
        image="/media/images/landing.svg"
        title="Kite Connect API"
        description="Build powerful trading applications with our developer-friendly APIs. Access market data, orders, portfolios, and more through Kite Connect."
        link="Learn more about Kite Connect →"
      />

      {/* Varsity */}
      <LeftSection
        image="/media/images/varsity-products.svg"
        title="Varsity"
        description="An extensive collection of easy-to-understand lessons and resources to help you learn about investing, trading, and financial markets."
        link="Learn more about Varsity →"
      />

      {/* Mobile */}
      <RightSection
        image="/media/images/products-mobile.png"
        title="TradeDesk Mobile"
        description="Take your investments with you wherever you go. Monitor markets, place trades, and manage your portfolio from your mobile device."
        link="Download the app →"
      />
    </>
  );
}

export default Hero;
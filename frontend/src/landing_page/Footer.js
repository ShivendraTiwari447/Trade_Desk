import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#fafafa",
        padding: "60px 7% 30px",
        fontFamily: "Arial, sans-serif",
        color: "#424242",
        borderTop: "1px solid #eee",
      }}
    >
      {/* Top Footer */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
          gap: "40px",
          marginBottom: "50px",
        }}
      >
        {/* Logo & Social */}
        <div>
          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="Zerodha"
            style={{
              width: "130px",
              marginBottom: "20px",
            }}
          />

          <p
            style={{
              fontSize: "14px",
              color: "#666",
              lineHeight: "1.6",
            }}
          >
            © 2010 - 2026, Zerodha Broking Ltd.
            <br />
            All rights reserved.
          </p>

          {/* Social Icons */}
          <div
            style={{
              display: "flex",
              gap: "18px",
              marginTop: "25px",
              alignItems: "center",
            }}
          >
            <a href="#" style={{ color: "#555", fontSize: "20px" }}>
              𝕏
            </a>

            <a href="#" style={{ color: "#555", fontSize: "20px" }}>
              ▶
            </a>

            <a href="#" style={{ color: "#555", fontSize: "20px" }}>
              in
            </a>

            <a href="#" style={{ color: "#555", fontSize: "20px" }}>
              ◎
            </a>
          </div>

          {/* App Buttons */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "25px",
              flexWrap: "wrap",
            }}
          >
            <a href="#">
              <img
                src="https://zerodha.com/static/images/google-play-badge-light.svg"
                alt="Google Play"
                style={{ width: "130px" }}
              />
            </a>

            <a href="#">
              <img
                src="https://zerodha.com/static/images/appstore-badge-light.svg"
                alt="App Store"
                style={{ width: "130px" }}
              />
            </a>
          </div>
        </div>

        {/* Account */}
        <div>
          <h3 style={headingStyle}>Account</h3>

          <FooterLink text="Open demat account" />
          <FooterLink text="Minor demat account" />
          <FooterLink text="NRI demat account" />
          <FooterLink text="HUF demat account" />
          <FooterLink text="Commodity" />
          <FooterLink text="Dematerialisation" />
          <FooterLink text="Fund transfer" />
          <FooterLink text="MTF" />
        </div>

        {/* Support */}
        <div>
          <h3 style={headingStyle}>Support</h3>

          <FooterLink text="Contact us" />
          <FooterLink text="Support portal" />
          <FooterLink text="How to file a complaint?" />
          <FooterLink text="Status of your complaints" />
          <FooterLink text="Bulletin" />
          <FooterLink text="Circular" />
          <FooterLink text="Z-Connect blog" />
          <FooterLink text="Downloads" />
        </div>

        {/* Company */}
        <div>
          <h3 style={headingStyle}>Company</h3>

          <FooterLink text="About" />
          <FooterLink text="Philosophy" />
          <FooterLink text="Press & media" />
          <FooterLink text="Careers" />
          <FooterLink text="Zerodha Cares (CSR)" />
          <FooterLink text="Zerodha.tech" />
          <FooterLink text="Open source" />
          <FooterLink text="Referral program" />
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={headingStyle}>Quick links</h3>

          <FooterLink text="Upcoming IPOs" />
          <FooterLink text="Brokerage charges" />
          <FooterLink text="Market holidays" />
          <FooterLink text="Economic calendar" />
          <FooterLink text="Calculators" />
          <FooterLink text="Markets" />
          <FooterLink text="Sectors" />
          <FooterLink text="Gift Nifty" />
        </div>
      </div>

      {/* Legal Information */}
      <div
        style={{
          borderTop: "1px solid #ddd",
          paddingTop: "35px",
          fontSize: "12px",
          color: "#777",
          lineHeight: "1.7",
        }}
      >
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
          Registration no.: INZ000031633 CDSL/NSDL: Depository services
          through Zerodha Broking Ltd. – SEBI Registration no.:
          IN-DP-431-2019
        </p>

        <p>
          Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
          Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
          Bengaluru - 560078, Karnataka, India.
        </p>

        <p>
          For any complaints pertaining to securities broking please write
          to <b>complaints@zerodha.com</b>, for DP related to{" "}
          <b>dp@zerodha.com</b>.
        </p>

        <p>
          Please ensure you carefully read the Risk Disclosure Document as
          prescribed by SEBI | ICF
        </p>

        <p>
          Procedure to file a complaint on <b>SEBI SCORES</b>: Register on
          SCORES portal. Mandatory details for filing complaints on SCORES:
          Name, PAN, Address, Mobile Number, E-mail ID.
        </p>

        <p>
          Investments in securities market are subject to market risks; read
          all the related documents carefully before investing.
        </p>

        <p>
          Attention investors: Stock brokers can accept securities as
          margins from clients only by way of pledge in the depository
          system. Update your e-mail and phone number with your stock broker
          / depository participant and receive OTP directly from depository
          on your e-mail and/or mobile number to create pledge.
        </p>

        <p>
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

        <p>
          As a business we don't give stock tips, and have not authorized
          anyone to trade on behalf of others. If you find anyone claiming
          to be part of Zerodha and offering such services, please create a
          ticket through the support portal.
        </p>
      </div>

      {/* Bottom Links */}
      <div
        style={{
          borderTop: "1px solid #ddd",
          marginTop: "30px",
          paddingTop: "25px",
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          fontSize: "13px",
        }}
      >
        <FooterLink text="NSE" />
        <FooterLink text="BSE" />
        <FooterLink text="MCX" />
        <FooterLink text="MSEI" />
        <FooterLink text="Terms & conditions" />
        <FooterLink text="Policies & procedures" />
        <FooterLink text="Privacy policy" />
        <FooterLink text="Disclosure" />
        <FooterLink text="Investor charter" />
        <FooterLink text="Sitemap" />
      </div>
    </footer>
  );
}

/* Reusable footer link */
function FooterLink({ text }) {
  return (
    <a
      href="#"
      style={{
        display: "block",
        color: "#666",
        textDecoration: "none",
        fontSize: "14px",
        marginBottom: "12px",
      }}
    >
      {text}
    </a>
  );
}

const headingStyle = {
  fontSize: "18px",
  fontWeight: "500",
  color: "#424242",
  marginBottom: "20px",
};

export default Footer;
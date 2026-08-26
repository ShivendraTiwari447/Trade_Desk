function RightSection({ image, title, description, link }) {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: "80px",
        padding: "70px 10%",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ width: "50%" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "500",
            color: "#424242",
            marginBottom: "20px",
          }}
        >
          {title}
        </h2>

        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.8",
            color: "#666",
          }}
        >
          {description}
        </p>

        <a
          href="#"
          style={{
            color: "#387ed1",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          {link}
        </a>
      </div>

      <div style={{ width: "50%", textAlign: "center" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            maxWidth: "500px",
          }}
        />
      </div>
    </section>
  );
}

export default RightSection;
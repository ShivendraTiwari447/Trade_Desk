function Universe({ title, description }) {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "80px 10%",
        fontFamily: "Arial, sans-serif",
      }}
    >
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
          color: "#666",
          lineHeight: "1.7",
        }}
      >
        {description}
      </p>
    </section>
  );
}

export default Universe;
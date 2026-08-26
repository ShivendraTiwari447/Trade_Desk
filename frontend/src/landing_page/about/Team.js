import React from "react";

function Team() {
  const team = [
    {
      name: "Shivendra Tiwari",
      role: "Founder & Developer",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    },
    {
      name: "Product Team",
      role: "Product & Design",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    },
    {
      name: "Technology Team",
      role: "Engineering & Technology",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
    },
  ];

  return (
    <section
      style={{
        padding: "70px 10% 100px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "500",
          color: "#424242",
          marginBottom: "50px",
        }}
      >
        Meet the Team
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "70px",
          flexWrap: "wrap",
        }}
      >
        {team.map((member, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              textAlign: "center",
            }}
          >
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: "180px",
                height: "180px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "20px",
              }}
            />

            <h3
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#424242",
                marginBottom: "8px",
              }}
            >
              {member.name}
            </h3>

            <p
              style={{
                fontSize: "15px",
                color: "#777",
                margin: 0,
              }}
            >
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
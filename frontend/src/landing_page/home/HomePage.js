import React from "react";

import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

function HomePage() {
  return (
    <>
      

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <Awards />
      </section>

      <section id="products">
        <Stats />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="open-account">
        <OpenAccount />
      </section>

      
    </>
  );
}

export default HomePage;
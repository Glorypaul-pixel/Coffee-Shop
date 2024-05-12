import React from "react";
import React, { useState, useEffect } from "react";

import "./Home.css";
import Borcelle from "../../assets/Borcelle.png";

const Home = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Get the top position of each section
      const aboutTop = document.getElementById("about").offsetTop;
      const servicesTop = document.getElementById("services").offsetTop;
      const contactTop = document.getElementById("contact").offsetTop;

      // Get the current scroll position
      const scrollPos = window.scrollY;

      // Check if the scroll position is within each section and update the active section accordingly
      if (scrollPos >= aboutTop && scrollPos < servicesTop) {
        setActiveSection("about");
      } else if (scrollPos >= servicesTop && scrollPos < contactTop) {
        setActiveSection("services");
      } else if (scrollPos >= contactTop) {
        setActiveSection("contact");
      } else {
        setActiveSection("");
      }
    };

    // Add event listener for scroll when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-page ">
      <header className="header flex ">
        <div className="image ">
          <img src={Borcelle} alt="Borcelle" />
        </div>
        <nav>
          <ul>
            <li className={activeSection === "home" ? "active" : ""}>
              <a href="#home">Home</a>
            </li>
            <li className={activeSection === "about" ? "active" : ""}>
              <a href="#about">About</a>
            </li>
            <li className={activeSection === "feature" ? "active" : ""}>
              <a href="#feature">Featur</a>
            </li>
            <li className={activeSection === "purchase" ? "active" : ""}>
              <a href="#purchase">Purchase</a>
            </li>
            <li className={activeSection === "contact" ? "active" : ""}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="body-text text-white">
        <h1 className="font-128px weight-400 height-153.81px">
          Coffee Makes Mood
        </h1>
        <p>"Indulge in Every Sip: Experience the Richness of Coffee"</p>
      </div>
    </div>
  );
};

export default Home;

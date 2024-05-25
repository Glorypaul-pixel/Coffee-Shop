// import React from "react";
import React, { useState, useEffect } from "react";
import "./index.css";
import Borcelle from "../src/assets/Borcelle.png";

// import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"];

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setActiveSection(section);
            break; // No need to continue checking other sections
          }
        }
      }
      // Remove active-section class from all sections
      const allSections = document.querySelectorAll("section");
      allSections.forEach((section) => {
        section.classList.remove("active-section");
      });

      // Add active-section class to the currently active section
      const activeSectionElement = document.getElementById(activeSection);
      if (activeSectionElement) {
        activeSectionElement.classList.add("active-section");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div>
      <div className="home-page " id="home">
        <header className="header flex ">
          <div className="image ">
            <img src={Borcelle} alt="Borcelle" />
          </div>
          <nav>
            <ul>
              <li>
                
              </li>
              <li
                className={activeSection === "home" ? "active" : ""}
                id="page"
              >
                <a href="#home">Home</a>
              </li>
              <li className={activeSection === "about" ? "active" : ""}>
                <a href="#about">About</a>
              </li>
              <li className={activeSection === "purchase" ? "active" : ""}>
                <a href="#purchase">Feature</a>
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
      <div className="App">
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

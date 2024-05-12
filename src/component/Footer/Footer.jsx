import React, { useState, useEffect } from "react";
import "./Footer.css";
import Coffee from "../../assets/Borcelle.png";
import Email from "../../assets/email.png";
import Call from "../../assets/call.png";

const Footer = () => {
  const [activeSection, setActiveSection] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission here (e.g., send data to server)

    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

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
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="footer" id="contact">
        <div className="form">
          <h1>Contact Us</h1>
          <p>Send us a message</p>
          <form onSubmit={handleSubmit}>
            <div className="pb-4">
              <input
                type="text"
                placeholder="Full name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="pb-4">
              <input
                type="email"
                placeholder="Your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <textarea
              placeholder="Your Message"
              cols="35"
              rows="3"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea> <br />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="sitemap">
          <h1>Sitemap</h1>
          <p>All our pages</p>
          <ul>
            <li className={activeSection === "home" ? "active" : ""}>
              <a href="#home">- Home</a>
            </li>
            <li className={activeSection === "about" ? "active" : ""}>
              <a href="#about">- About</a>
            </li>
            <li className={activeSection === "purchase" ? "active" : ""}>
              <a href="#purchase">- Feature</a>
            </li>
            <li className={activeSection === "purchase" ? "active" : ""}>
              <a href="#purchase">- Purchase</a>
            </li>
            <li className={activeSection === "contact" ? "active" : ""}>
              <a href="#contact">- Contact</a>
            </li>
          </ul>
        </div>
        <div className="call">
          <div className="shop">
            <img src={Coffee} alt="Coffee" />
          </div>

          <div className="num flex items-center">
            <img src={Call} alt="CALL" />
            <p className="pl-4">(08) 400 2000</p>
          </div>
          <div className="mail flex items-center">
            <img src={Email} alt="email" />
            <p className="pl-4">coffeeborcelle@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="copy">
        <h5>Copyright 2020 All Rights Reserved Company Name</h5>
      </div>
    </div>
  );
};

export default Footer;

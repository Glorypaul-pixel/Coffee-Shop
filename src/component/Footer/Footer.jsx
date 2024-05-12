import React from "react";
import "./Footer.css";
import Coffee from "../../assets/Borcelle.png";
import Email from "../../assets/email.png";
import Call from "../../assets/call.png";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="form">
          <h1>Contact Us</h1>
          <p>Send us a message</p>
          <form action="get">
            <div className="pb-4">
              <input type="text" placeholder="Full name" />
            </div>
            <div className="pb-4">
              <input type="email" placeholder="Your email" />
            </div>
            <textarea placeholder="Your Message" cols="35" rows="3"></textarea>
          </form>
          <button type="submit">Submit</button>
        </div>
        <div className="sitemap">
          <h1>Sitemap</h1>
          <p>All our pages</p>
          <ul>
            <li>- Home</li>
            <li>- About Us</li>
            <li>- Feature</li>
            <li>- Pricing</li>
            <li>- Contact Us</li>
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

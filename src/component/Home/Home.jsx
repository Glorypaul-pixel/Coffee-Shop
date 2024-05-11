import React from "react";
import "./Home.css";
import Borcelle from "../../assets/Borcelle.png";

const Home = () => {
  return (
    <div className="home-page ">
      <header className="header flex ">
        <div className="image ">
          <img src={Borcelle} alt="Borcelle" />
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Features</li>
            <li>Purchase</li>
            <li>Contact</li>
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

import React from "react";
import Coffee from "../../assets/coffee.png";
import "./About.css";
const About = () => {
  return (
    <div className="about-page">
      <div className="discover">
        <div className="about-image">
          <img src={Coffee} alt="Coffee" />
        </div>
        <div className="about-text">
          <h1>Discover Coffee Borcelle</h1>
          <h3> Elevating Your Coffee Experience</h3>
          <p>
            At Coffee Borcelle, we're on a mission to redefine your coffee{" "}
            <br />
            moments. Our carefully curated selection of premium beans, <br />{" "}
            sourced from the world's most renowned coffee regions.{" "}
          </p>
          <br />
          <p>
            With expert craftsmanship and a commitment to quality, <br /> Join
            us in savoring the art of coffee, one cup at a time.
          </p>
          <button type="submit" className="">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

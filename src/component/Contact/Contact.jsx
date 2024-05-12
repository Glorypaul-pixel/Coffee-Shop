import React from "react";
import "./Contact.css";
import Cup from "../../assets/cleanup.png";
const Contact = () => {
  return (
    <div className="contact">
      <div className="IMAGE">
        <h1>Reviews</h1>
        <img src={Cup} alt="cup" />
      </div>
      <h3>What other people are saying!</h3>
      <div className="reviews">
        <div className="elon">
          <h4>
            "Indulge in the sublime experience of <br /> Coffee Borcelle, where
            every sip is a <br />
            journey to flavor paradise. Crafted with <br /> precision, our rich
            blends ignite the senses <br /> and redefine coffee appreciation."
          </h4>
          <p>@elonmusk</p>
        </div>
        <div className="jeff">
          <h4>
            "Discover a world of taste with Coffee <br /> Brocelle. Each cup is
            a masterpiece,
            <br /> blending aromas and flavors that <br />
            dance on your palate. Join us in <br />
            celebrating coffee at its finest."
          </h4>
          <p>@JeffBezos</p>
        </div>
        <div className="beast">
          <h4>
            “Welcome to the heart and soul of coffee <br />
            passion –Coffee Borcelle. Our carefully <br />
            curated beans are an ode to <br />
            craftsmanship, brewing a story of <br />
            perfection in every cup.”
          </h4>
          <p>@MrBeast</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

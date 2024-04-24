import React from "react";

const About = () => {
  return (
    <div className="container" style={{marginTop: "80px"}}>
      <h2 className="text-center my-3">About Us</h2>
      <p className="abt-body">
        The WireLess is a news application which makes sure that you are kept
        updated with the latest news from around the world. The WireLess offers
        you the latest and the most important headlines which are updated every
        time a prominent event occurs. Our reporters are on their job 24/7 to
        make sure you are not left oblivious with anything of importance.
      </p>
      <h4 className="abt-usg">Built Using</h4>
      <ul className="abt-ul">
        <li>React JS</li>
        <li>NewsAPI</li>
      </ul>
      <p className="abt-sgn">Created by Faiz Ahmed</p>
    </div>
  );
};

export default About;

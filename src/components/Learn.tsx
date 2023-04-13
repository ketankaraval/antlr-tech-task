import React from "react";
import learn from "../assets/learn.png";

const Learn: React.FC = () => {
  return (
    <div className="learn">
      <div className="learn__sec-1">
        <hr />
        <h2>Meet Our Experts</h2>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <h6>Learn More {">"}</h6>
      </div>
      <div className="learn__sec-2">
        <img src={learn} alt="learn" />
      </div>
    </div>
  );
};

export default Learn;

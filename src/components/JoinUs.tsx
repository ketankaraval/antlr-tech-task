import React from "react";
import Button from "./Controls/Button";

const JoinUs: React.FC = () => {
  return (
    <div className="newsletter">
      <h5>Newsletter</h5>
      <h1>JOIN US</h1>
      <p>
        Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics: Newtonian mechanics
      </p>
      <div className="newsletter__mail">
        <input type="email" placeholder="Your mail" />
        <Button
          variant="primary"
          type="filled"
          onClick={() => console.log("clicked")}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default JoinUs;

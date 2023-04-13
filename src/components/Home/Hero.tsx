import React from "react";
import Button from "../Controls/Button";
import HeroCard from "./HeroCard";
import hero from "../../assets/hero.png";
import { FaHeartbeat, FaStethoscope, FaNotesMedical } from "react-icons/fa";

const Hero: React.FC = () => {
  const heroCard = [
    {
      icon: <FaHeartbeat size={32} color="white" />,
      title: "Online Appoinment",
      description:
        "The gradual accumulation of information about atomic and small-scale behaviour...",
    },
    {
      icon: <FaStethoscope size={32} color="white" />,
      title: "Emergency Case",
      description:
        "The gradual accumulation of information about atomic and small-scale behaviour...",
    },
    {
      icon: <FaNotesMedical size={32} color="white" />,
      title: "Cancer Care",
      description:
        "The gradual accumulation of information about atomic and small-scale behaviour...",
    },
  ]; // Can change this to useState with useEffect to fetch and update data from server

  return (
    <div className="hero-bg">
      <div className="hero">
        <div className="hero__titles">
          <div className="titles__sec-1">
            <h5>Join us</h5>
            <h1>A Great Place to Receive Care</h1>
            <p>
              Medical Recover is most focused in helping you discover your most
              beautiful smile
            </p>
            <div>
              <Button
                variant="primary"
                type="filled"
                onClick={() => console.log("clicked")}
                className="mr-8"
              >
                Get Quote Now
              </Button>
              <Button
                variant="primary"
                type="outline"
                onClick={() => console.log("clicked")}
              >
                Learn more
              </Button>
            </div>
          </div>
          <div className="titles__sec-2">
            <img src={hero} alt="hero" />
          </div>
        </div>
        <div className="hero__cards">
          {heroCard.map((details) => (
            <HeroCard {...details} key={details.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

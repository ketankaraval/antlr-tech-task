import React from "react";
import Card from "./Card";
import card1 from "../assets/card-1.png";
import card2 from "../assets/card-2.png";
import card3 from "../assets/card-3.png";

const Sector: React.FC = () => {
  const sales = [
    {
      tag: "Painless procedures",
      title: "Quick examination",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      rating: 4.9,
      sales: "15 Sales",
      mrp: 16.48,
      discountedPrice: 8.48,
      img: card1,
    },
    {
      tag: "Cancer Care",
      title: "Online Appointment",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      rating: 4.9,
      sales: "15 Sales",
      mrp: 16.48,
      discountedPrice: 8.48,
      img: card2,
    },
    {
      tag: "Best dental surgeons",
      title: "Emergency Case",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      rating: 4.9,
      sales: "15 Sales",
      mrp: 16.48,
      discountedPrice: 8.48,
      img: card3,
    },
  ]; // Can change this to useState with useEffect to fetch and update data from server

  return (
    <div className="sector-bg">
      <div className="sector__section">
        <div className="sector__titles">
          <h5>Practice advice</h5>
          <h1>Our Department</h1>
          <p>
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="sector__cards">
          {sales.map((sale) => (
            <Card {...sale} key={sale.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sector;

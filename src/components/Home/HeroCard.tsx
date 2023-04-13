import React from "react";

interface IHeroCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HeroCard: React.FC<IHeroCard> = ({ icon, title, description }) => {
  return (
    <div className="hero-card">
      <div className="hero-card__icon">{icon}</div>
      <h3>{title}</h3>
      <hr />
      <p>{description}</p>
    </div>
  );
};

export default HeroCard;

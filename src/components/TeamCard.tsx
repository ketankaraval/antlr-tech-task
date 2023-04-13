import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

interface ICard {
  name: string;
  profession: string;
  img: string;
}

const TeamCard: React.FC<ICard> = ({ name, profession, img }) => {
  return (
    <div className="card__team">
      <img src={img} alt="card" />
      <div className="card__details">
        <h5>{name}</h5>
        <p>{profession}</p>
      </div>
      <div className="card__team__icons">
        <FaFacebook color="#FF685B" size={24} />
        <FaInstagram color="#FF685B" size={24} />
        <FaTwitter color="#FF685B" size={24} />
      </div>
    </div>
  );
};

export default TeamCard;

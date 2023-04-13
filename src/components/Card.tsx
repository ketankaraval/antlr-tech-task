import React from "react";
import { FaStar, FaDownload } from "react-icons/fa";

interface ICard {
  tag: string;
  title: string;
  description: string;
  rating: number;
  sales: string;
  mrp: number;
  discountedPrice: number;
  img: any;
}

const Card: React.FC<ICard> = ({
  tag,
  title,
  description,
  rating,
  sales,
  mrp,
  discountedPrice,
  img,
}) => {
  return (
    <div className="card">
      <img src={img} alt="card" />
      <div className="card__details">
        <div className="card__details__heading">
          <h6>{tag}</h6>
          <div className="rating">
            <FaStar color="yellow" />
            {rating}
          </div>
        </div>
        <h5>{title}</h5>
        <p>{description}</p>
        <h6>
          <FaDownload />
          {sales}
        </h6>
        <div className="card__details__pricing">
          <span className="pricing--mrp">{mrp}</span>
          <span className="pricing--discounted">{discountedPrice}</span>
        </div>
        <div className="card__details__learn">Learn More {">"}</div>
      </div>
    </div>
  );
};

export default Card;

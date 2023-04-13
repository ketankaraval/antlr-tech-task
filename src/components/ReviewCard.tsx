import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

interface ICard {
  id: any;
  rating: boolean[];
  review: string;
  iconImg: string;
  name: string;
  role: string;
}

const ReviewCard: React.FC<ICard> = ({
  rating,
  review,
  iconImg,
  name,
  role,
}) => {
  return (
    <div className="review__card">
      <div className="review__rating">
        {rating.map((status, index) =>
          status ? (
            <FaStar color="#F3CD03" key={index} />
          ) : (
            <FaRegStar key={index} />
          )
        )}
      </div>
      <div className="review__details">{review}</div>
      <div className="user__data">
        <img src={iconImg} alt="user img" />
        <div className="user__info">
          <div className="user__name">{name}</div>
          <div className="user__role">{role}</div>
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;

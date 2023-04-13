import React from "react";
import ReviewCard from "./ReviewCard";
import testimonialUser1 from "../assets/testimonial-user-cover-1.png";
import testimonialUser2 from "../assets/testimonial-user-cover-2.png";
import testimonialUser3 from "../assets/testimonial-user-cover-3.png";

const Review: React.FC = () => {
  const reviewsInfo = [
    {
      id: "1",
      rating: [true, true, true, true, false],
      review:
        "Slate helps you see  how many more days you need to work to reach your financial  goal for the month and year.",
      iconImg: testimonialUser1,
      name: "Regina Miles",
      role: "Designer",
    },
    {
      id: "2",
      rating: [true, true, true, true, false],
      review:
        "Slate helps you see  how many more days you need to work to reach your financial  goal for the month and year.",
      iconImg: testimonialUser2,
      name: "Regina Miles",
      role: "Designer",
    },
    {
      id: "3",
      rating: [true, true, true, true, false],
      review:
        "Slate helps you see  how many more days you need to work to reach your financial  goal for the month and year.",
      iconImg: testimonialUser3,
      name: "Regina Miles",
      role: "Designer",
    },
  ]; // Can change this to useState with useEffect to fetch and update data from server

  return (
    <div className="review">
      <h5>Practice advice</h5>
      <h1>Leading Medicine</h1>
      <p>
        Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics: Newtonian mechanics
      </p>
      <div className="review__section">
        {reviewsInfo.map((info) => (
          <ReviewCard {...info} key={info.id} />
        ))}
      </div>
    </div>
  );
};

export default Review;

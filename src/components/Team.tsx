import React, { useMemo, useState } from "react";
import User1 from "../assets/userCover1.png";
import User2 from "../assets/userCover2.png";
import User3 from "../assets/userCover3.png";
import User4 from "../assets/userCover4.png";
import TeamCard from "./TeamCard";
import Button from "./Controls/Button";

interface IUserCard {
  id: number;
  name: string;
  profession: string;
  img: string;
}

const Team: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teams: IUserCard[] = [
    {
      id: 1,
      name: "Julian Jameson",
      profession: "Profession",
      img: User1,
    },
    {
      id: 2,
      name: "Julian Jameson",
      profession: "Profession",
      img: User2,
    },
    {
      id: 3,
      name: "Julian Jameson",
      profession: "Profession",
      img: User3,
    },
    {
      id: 4,
      name: "Julian Jameson",
      profession: "Profession",
      img: User4,
    },
    {
      id: 5,
      name: "Julian Jameson",
      profession: "Profession",
      img: User1,
    },
    {
      id: 6,
      name: "Julian Jameson",
      profession: "Profession",
      img: User4,
    },
    {
      id: 7,
      name: "Julian Jameson",
      profession: "Profession",
      img: User3,
    },
    {
      id: 8,
      name: "Julian Jameson",
      profession: "Profession",
      img: User3,
    },
    {
      id: 9,
      name: "Julian Jameson",
      profession: "Profession",
      img: User4,
    },
    {
      id: 10,
      name: "Julian Jameson",
      profession: "Profession",
      img: User2,
    },
    {
      id: 11,
      name: "Julian Jameson",
      profession: "Profession",
      img: User3,
    },
    {
      id: 12,
      name: "Julian Jameson",
      profession: "Profession",
      img: User1,
    },
    {
      id: 13,
      name: "Julian Jameson",
      profession: "Profession",
      img: User1,
    },
    {
      id: 14,
      name: "Julian Jameson",
      profession: "Profession",
      img: User2,
    },
    {
      id: 15,
      name: "Julian Jameson",
      profession: "Profession",
      img: User3,
    },
    {
      id: 16,
      name: "Julian Jameson",
      profession: "Profession",
      img: User1,
    },
    {
      id: 17,
      name: "Julian Jameson",
      profession: "Profession",
      img: User1,
    },
    {
      id: 18,
      name: "Julian Jameson",
      profession: "Profession",
      img: User2,
    },
  ];
  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const itemsToShow = useMemo(() => {
    return window.innerWidth >= 768
      ? teams.slice(currentSlide * 4, currentSlide * 4 + 4)
      : teams.slice(currentSlide * 1, currentSlide * 1 + 1);
  }, [currentSlide, teams]);

  return (
    <div className="team">
      <h5>Team</h5>
      <h1>Our Team</h1>
      <p>
        Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics: Newtonian mechanics
      </p>
      <div className="team__section">
        <div className="carousel-container">
          {itemsToShow.map((team) => (
            <TeamCard
              name={team.name}
              profession={team.profession}
              img={team.img}
              key={team.id}
            />
          ))}
        </div>
        <div>
          <Button
            variant="primary"
            type="filled"
            onClick={prevSlide}
            className="mr-8"
            isDisable={currentSlide === 0}
          >
            Back
          </Button>
          <Button
            variant="primary"
            type="filled"
            onClick={nextSlide}
            isDisable={
              window.innerWidth >= 768
                ? teams.length <= currentSlide * 4 + 4
                : teams.length <= currentSlide * 1 + 1
            }
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Team;

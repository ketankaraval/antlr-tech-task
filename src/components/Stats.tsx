import React from "react";

const Stats: React.FC = () => {
  const stats = [
    { title: "15k", description: "Happy Customers" },
    { title: "150k", description: "Monthly Visitors" },
    { title: "15", description: "Countries  Worldwide" },
    { title: "100+", description: "Top Partners" },
  ]; // Can change this to useState with useEffect to fetch and update data from server
  return (
    <div className="stats">
      {stats.map((stat) => {
        return (
          <div key={stat.description}>
            <h1>{stat.title}</h1>
            <h5>{stat.description}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;

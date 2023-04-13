import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Home/Hero";
import JoinUs from "../components/JoinUs";
import Learn from "../components/Learn";
import Navbar from "../components/Navbar";
import Review from "../components/Review";
import Sector from "../components/Sector";
import Stats from "../components/Stats";
import Team from "../components/Team";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Stats />
      <Learn />
      <Sector />
      <Review />
      <Team />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default Home;

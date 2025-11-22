import React from "react";
import Header from "../../components/Header";
import Destination from "./Destination";

const DestinationHomePage = () => {
  return (
    <div className="destination-hero-section">
      <Header />
      <div>
        <p className="section-title"><span>01</span> Pick your destination</p>
        <Destination />
      </div>
    </div>
  );
};

export default DestinationHomePage;

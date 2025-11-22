import React from "react";
import Header from "../../components/Header.jsx";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="showcase">
      <Header />
      <div className="showcase-content">
        <div  className="showcase-text">
          <span className="text-md">So, you want to travel to</span>
          <p className="text-lg">Space</p>
          Let's face it; if you want to go to space, you might as well genuinely
          go
          to outer space and not hover kind of on the edge of it. Well sit back,
          and relax because we'll give you a truly out of this world experience!
        </div>

        <Link to="/destination">
          <button className="explore-btn">Explore</button>
        </Link>
      </div>
    </div>
  );
};

export default index;

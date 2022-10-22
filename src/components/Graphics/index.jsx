import React from "react";
import BarChart from "../BarChart";
import RadarGraph from "../RadarGraph";
import AverageSessions from "../AverageSessions";
import "./Graphics.css";
import Lipids from "../Lipids";
import Proteins from "../Proteins";
import Carbs from "../Carbs";
import Calories from "../Calories";

const Graphics = () => {
  return (
    <div className="graphics_container">
      <div className="graphics">
        <BarChart />
        <div className="radar">
          <AverageSessions />
          <RadarGraph />
        </div>
      </div>
      <div className="stats">
        <Calories data={100} />
        <Proteins data={100}/>
        <Carbs data={100} />
        <Lipids data={100} />
      </div>
    </div>
  );
};

export default Graphics;

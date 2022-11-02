import React, { useState, useEffect } from "react";
import RadarGraph from "../RadarGraph";
import AverageSessions from "../AverageSessions";
import "./Graphics.css";
import Lipids from "../KeyData/Lipids";
import Proteins from "../KeyData/Proteins";
import Carbs from "../KeyData/Carbs";
import Calories from "../KeyData/Calories";
import { getData } from "../../getData";
import { useParams } from "react-router-dom";
import KPI from "../KPI";
import Activity from "../BarChart";

const Graphics = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchUser(id) {
      const userData = await getData(id);
      setUser(userData);
    }

    fetchUser(id);
  }, []);

  return (
    <div className="graphics_container">
      <div className="graphics">
        <Activity />
        <div className="radar">
          <div className="average">
            <AverageSessions />
          </div>
          {/* <div className="radarg">
          <RadarGraph /></div>
          <KPI /> */}
        </div>
      </div>
      <div className="stats">
        <Calories data={user?.keyData?.calorieCount || 100} />
        <Proteins data={user?.keyData?.proteinCount || 100} />
        <Carbs data={user?.keyData?.carbohydrateCount || 100} />
        <Lipids data={user?.keyData?.lipidCount || 100} />
      </div>
    </div>
  );
};

export default Graphics;

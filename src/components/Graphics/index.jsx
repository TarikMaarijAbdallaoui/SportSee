import React, { useState, useEffect } from "react";
import RadarGraph from "../RadarGraph";
import AverageSessions from "../AverageSessions";
import "./Graphics.css";
import Lipids from "../KeyData/Lipids";
import Proteins from "../KeyData/Proteins";
import Carbs from "../KeyData/Carbs";
import Calories from "../KeyData/Calories";
import { getData } from "../../getData";
import { useNavigate, useParams } from "react-router-dom";
import Activity from "../BarChart";
import ScoreChart from "../ScoreChart";

const Graphics = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser(id) {
      const userData = await getData(id);
      setUser(userData);
      if (!userData) {
        navigate("/not-found");
      }
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
          <div className="radarg">
            <RadarGraph />
          </div>
          <ScoreChart data={user?.todayScore || user?.score} />
        </div>
      </div>
      <div className="stats">
        <Calories data={user?.keyData?.calorieCount || 0} />
        <Proteins data={user?.keyData?.proteinCount || 0} />
        <Carbs data={user?.keyData?.carbohydrateCount || 0} />
        <Lipids data={user?.keyData?.lipidCount || 0} />
      </div>
    </div>
  );
};

export default Graphics;

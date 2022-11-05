import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./ScoreChart.css";

/**
 * Component for Score Chart
 * @param {*} param0
 * @returns
 */
export default function ScoreChart({ data }) {
  const todayScore = data;
  const percent = todayScore * 100;
  const rest = 100 - percent;

  const score = [
    { name: "objective", value: percent, fillColor: "red" },
    { name: "objective pending", value: rest, fillColor: "white" },
  ];
  const scoreLabel = score[0].value ? `${score[0].value}%` : "0%"
  const initialData = [{name: "Score", value: 100}]
  return (
    <div className="score_container">
      <div className="score_title">Score</div>

      <div className="score_legend">
        <p className="score_label">{scoreLabel}</p>
        <p style={{color: "#74798C"}}>de votre <br/> objectif</p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={initialData} dataKey="initialData" />
          <Pie
            data={score}
            innerRadius={60}
            outerRadius={70}
            startAngle={180}
            endAngle={-360}
            dataKey="value"
          >
            {score.map((base, index) => (
              <Cell
                key={`progress-${index}`}
                fill={base.fillColor}
                cornerRadius="50%"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

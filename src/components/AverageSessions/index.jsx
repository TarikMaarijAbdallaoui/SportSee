import React, { useEffect, useState } from "react";
import { getAverageSessions } from "../../getData";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import "./AverageSessions.css"

const CustomTooltip = ({active, payload}) => {
  if (active && payload) {
    return (
      <div className="tooltip">
        <p>{`${payload[0].value}`}min</p>
      </div>
    )
  }
}

export default function AverageSessions() {
  const [average, setAverage] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchUser(id) {
      const userAverageSessions = await getAverageSessions(id);
      setAverage(userAverageSessions);
    }

    fetchUser(id);
  }, []);

  console.log("User average sessions", average);

  const data = average;
  return (
    <div className="average">
      <p className="title">Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{top: 20, right: 20, left: -40, bottom: 5}}>
          <XAxis dataKey="day" tickLine={false} axisLine={false} stroke="white" />
          <YAxis tickLine={false} axisLine={false} tick={false} domain={["dataMin - 10", "dataMax + 10"]} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            strokeWidth={2}
            stroke="#FFFFFF"
            activeDot={{ r: 8 }}
            dot={false}
            
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

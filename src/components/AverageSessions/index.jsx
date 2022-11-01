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

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function AverageSessions() {
  const [average, setAverage] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchUser(id) {
      const userAverageSessions = await getAverageSessions(id);
      const days = ["L", "M", "M", "J", "V", "S", "D"];
      userAverageSessions.sessions.forEach(
        (element, index) => (element.day = days[index])
      );
      setAverage(userAverageSessions.sessions);
    }

    fetchUser(id);
  }, []);

  console.log("User average sessions", average);

  const data = average;
  return (
    <div className="average">
      <p className="title">Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data} margin={{top: 120, bottom: 30}}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="day" tickLine={false} />
          {/* <YAxis /> */}
          <Tooltip />
          {/* <Legend /> */}
          {/* <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

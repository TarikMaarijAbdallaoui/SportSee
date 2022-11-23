import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { getPerformance } from "../../getData";

/**
 * Graph Performance component
 * @returns Recharts Radar Graphs with user performance
 */
export default function RadarGraph() {
  const [performance, setPerformance] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const data = await getPerformance(id);

      setPerformance(data);
    }
    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="48%" cy="50%" outerRadius="70%" data={performance}>
        <PolarGrid radialLines={false}/>
        <PolarAngleAxis
          dataKey="kind"
          tickLine={false}
          stroke="#fff"
          tickSize={10}
          axisLine={false}
          tick={{ scaleToFit: true, fontSize: 10 }}
        />
        <Radar
          name="kind"
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

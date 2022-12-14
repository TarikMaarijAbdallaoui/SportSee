import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";
import { getActivity } from "../../getData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./BarChart.css";

/**
 * Tooltip component for user activity
 * @component
 * @param {bool} active - Tooltip hovered
 * @param {array} payload - User activity
 * @returns 
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className="tooltip">
        <p>{`${payload[0].value}`}cal</p>
        <p>{`${payload[1].value}`}kg</p>
      </div>
    );
  }
};

/**
 * Graphic showing user activity sessions
 * @component
 * @returns {node} Rechart Line chart graphics
 */
const Activity = () => {
  const [activity, setActivity] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData(id) {
      const userActivity = await getActivity(id);
      
      setActivity(userActivity);
    }

    fetchData(id);
  }, []);

  const data = activity;

  return (
    <div className="activity">
      <span className="activity_title">Activité quotidienne</span>
      <div className="activity_legend">
        <div className="kilogram">
          <div className="bullet"></div>
          <p className="description">Poids (kg)</p>
        </div>
        <div className="calories">
          <div className="bullet"></div>
          <p className="description">Calories brûlées</p>
        </div>
      </div>
      <ResponsiveContainer>
        <BarChart
          width={"100%"}
          height={"40%"}
          data={data}
          barGap={8}
          barCategoryGap={"20%"}
          margin={{
            top: 120,
            right: 30,
            left: 40,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickMargin={16}
            tick={{ stroke: "#9B9EAC" }}
          />
          <YAxis
            tickCount={6}
            domain={[0, 600]}
            dataKey="calories"
            axisLine={false}
            tickLine={false}
            tick={false}
            hide={true}
            yAxisId="cal"
          />
          <YAxis
            orientation="right"
            tickCount={3}
            domain={["dataMin - 1", "dataMax"]}
            dataKey="kilogram"
            axisLine={false}
            tickLine={false}
            tickMargin={30}
            tick={{ stroke: "#9B9EAC" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="calories"
            stackId={"cal"}
            fill="#FF0000"
            radius={[25, 25, 0, 0]}
            barSize={8}
            label={false}
            yAxisId="cal"
          />
          <Bar
            dataKey="kilogram"
            fill="#000000"
            radius={[25, 25, 0, 0]}
            barSize={8}
            label={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

CustomTooltip.propTypes = {
  /**
   * Tooltip being hovered
   */
  active: PropTypes.bool,
  /**
   * Array with session length and day
   */ 
  payload: PropTypes.array
}

export default Activity;
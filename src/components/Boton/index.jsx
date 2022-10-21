import React from "react";
import "./Boton.css";

const Boton = ({ props }) => {
  const { icon, activity } = props;
  return (
    <div className="button">
      <img src={icon} alt={activity} />
    </div>
  );
};

export default Boton;

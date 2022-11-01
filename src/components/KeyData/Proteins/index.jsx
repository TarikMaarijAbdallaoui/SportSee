import React from "react";
import classes from "./Proteins.module.css";
import icon from "../../../assets/chicken.svg";

const Proteins = ({ data }) => {
  return (
    <div className={classes.proteins}>
      <div className={classes.icon}>
        <img src={icon} alt="" />
      </div>
      <div className={classes.data}>
        <p>{data}g</p>
        <span>Proteines</span>
      </div>
    </div>
  );
};

export default Proteins;

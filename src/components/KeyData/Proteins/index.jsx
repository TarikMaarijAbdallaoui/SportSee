import React from "react";
import PropTypes from 'prop-types'
import classes from "./Proteins.module.css";
import icon from "../../../assets/chicken.svg";

/**
 * Component shows proteint count
 * @Component
 * @param {string} data Proteins count
 * @returns 
 */
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

Proteins.propTypes = {
  /**
   * protein value
   */
  data:PropTypes.number
}

export default Proteins;

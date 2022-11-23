import React from "react";
import PropTypes from 'prop-types'
import "./Boton.css";

/**
 * Button and icon for vertical menu
 * @component
 * @returns {node} Button in vertical menu
 */
const Boton = ({ props }) => {
  const { icon, activity } = props;
  return (
    <div className="button">
      <img src={icon} alt={activity} />
    </div>
  );
};

Boton.propTypes = {
  /**
   * Object with icon and text
   */
  props: PropTypes.object
}

export default Boton;

import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

/**
 * Component for Not Found route
 * @returns Not Found message
 */
const NotFound = () => {
  return (
    <div className="error">
      <h2>Not Found</h2>

      <div>
        <Link to="/user/18">voir les données de lútilisateur Karl</Link>
      </div>
      <div>
        <Link to="/user/12">voir les données de lútilisateur Cecilia</Link>
      </div>
    </div>
  );
};

export default NotFound;

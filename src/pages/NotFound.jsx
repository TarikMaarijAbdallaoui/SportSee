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
      <h2>Erreur lors de la récupération des données du backend</h2>

      <div>
        <Link to="/user/12/mocked">voir les données de lútilisateur Karl</Link>
      </div>
      <div>
        <Link to="/user/18/mocked">voir les données de lútilisateur Cecilia</Link>
      </div>
    </div>
  );
};

export default NotFound;

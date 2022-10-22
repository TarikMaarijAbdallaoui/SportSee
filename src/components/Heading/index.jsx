import React, { useEffect } from "react";
import "./Heading.css";
import { useParams } from "react-router-dom";

const Heading = () => {
  const { id } = useParams();

  useEffect(() => {
    async function getData(id) {
      try{
        const response = await fetch(`localhost:3000/user/${id}`)
      const data =  await response.json()

      console.log(data)
      } catch (error) {console.log(error)}
      
        
    }
    getData(id)
  }, []);
  const name = 'Lucas'
  return (
    <header>
      <h2 className="title">
        Bonjour <span className="name">{name}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
};

export default Heading;

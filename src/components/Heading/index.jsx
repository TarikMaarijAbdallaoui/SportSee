import React, { useEffect, useState } from "react";
import "./Heading.css";
import { useParams } from "react-router-dom";
import { getData } from "../../getData";

const Heading = () => {
  const [user, setUser] = useState({})
  const { id } = useParams();

  useEffect(()=>{
    async function fetchUser(id) {
      const userData = await getData(id);
      setUser(userData)
    }

    fetchUser(id)
  }, [])
  
  const name = user?.userInfos?.firstName;
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

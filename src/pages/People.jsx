import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, useParams } from "react-router-dom";

export const People = () => {
  const { store } = useGlobalReducer();
  const { peopleId } = useParams();
  const singlePerson = store.characters.find(
    (character) => character.uid === parseInt(peopleId)
  );

  const[characterInfo,setCharacterInfo]= useState([])
  const characterId = parseInt(peopleId);

  const GetInfo = async () => {
    

    try {
      const result = await fetch(
        `https://swapi.tech/api/people/${characterId}`
      );
      if (!result.ok) {
        console.error(
          `Fetch failed for ID : ${result.status} ${result.statusText}`
        );
      }
      const data = await result.json();
      const info = data.result.properties;
      setCharacterInfo(info)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetInfo();
  }, []);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${characterId}.jpg`} className="card-img-top" alt={`Picture of `} />
        <div className="card-body">
          <h5 className="card-title">{characterInfo.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
        </div>
      </div>
    </>
  );
};

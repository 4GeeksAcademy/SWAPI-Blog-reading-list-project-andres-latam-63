import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, useParams } from "react-router-dom";

export const Planet = () => {
  const { store } = useGlobalReducer();
  const { planetId } = useParams();
  const singlePlanet = store.planets.find(
    (planet) => planet.uid === parseInt(planetId)
  );

  const [planetInfo, setPlanetInfo] = useState([]);
  const singleplanetId = parseInt(planetId);

  const GetInfo = async () => {
    try {
      const result = await fetch(
        `https://swapi.tech/api/planets/${singleplanetId}`
      );
      if (!result.ok) {
        console.error(
          `Fetch failed for ID : ${result.status} ${result.statusText}`
        );
      }
      const data = await result.json();
      const info = data.result.properties;
      setPlanetInfo(info);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetInfo();
  }, []);

  return (
    <>
      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${singleplanetId}.jpg`}
            className="card-img-top"
            alt={`Picture of ${planetInfo.name}`}
          />
          <div className="card-body">
            <h5 className="card-title">{planetInfo.name}</h5>
            <p className="card-text">Terrain: {planetInfo.terrain}</p>
          </div>
        </div>
      </div>
    </>
  );
};

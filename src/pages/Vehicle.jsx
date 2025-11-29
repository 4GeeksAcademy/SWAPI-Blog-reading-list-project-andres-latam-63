import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, useParams } from "react-router-dom";

export const Vehicle = () => {
  const { store } = useGlobalReducer();
  const { vehicleId } = useParams();
  const singleVehicle = store.vehicles.find(
    (character) => character.uid === parseInt(vehicleId)
  );

  const [vehicleInfo, setVehicleInfo] = useState([]);
  const singlevehicleId = parseInt(vehicleId);

  const GetInfo = async () => {
    try {
      const result = await fetch(
        `https://swapi.tech/api/vehicles/${singlevehicleId}`
      );
      if (!result.ok) {
        console.error(
          `Fetch failed for ID : ${result.status} ${result.statusText}`
        );
      }
      const data = await result.json();
      const info = data.result.properties;
      setVehicleInfo(info);
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
            src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${singlevehicleId}.jpg`}
            className="card-img-top"
            alt={`Picture of ${vehicleInfo.name}`}
          />
          <div className="card-body">
            <h5 className="card-title">{vehicleInfo.name}</h5>
            <p className="card-text">Crew: {vehicleInfo.crew}</p>
          </div>
        </div>
      </div>
    </>
  );
};

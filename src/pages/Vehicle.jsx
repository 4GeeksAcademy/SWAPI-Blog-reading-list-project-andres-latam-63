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
      <div className="container d-flex flex-column justify-content-center mt-5">
        <div
          className="card mb-3 ms-auto me-auto"
          style={{ maxWidth: "800px" }}
        >
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${singlevehicleId}.jpg`}
                className="img-fluid rounded-start object-fit-fill h-100"
                alt={vehicleInfo.name}
              />
            </div>
            <div className="col-md-6 d-flex">
              <div className="card-body bg-dark text-white rounded-end">
                <h4 className="card-title text-center">{vehicleInfo.name}</h4>
                <p className="card-text mt-5 pt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, maiores obcaecati non animi voluptatem nulla et
                  voluptatibus facilis quisquam. Sunt quae repellat tenetur quod
                  nihil.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-auto me-auto d-flex flex-column">
          <ul className="list-group list-group-horizontal text-white">
            <li className="list-group-item single-cards-info">
              <div className="list-property text-center">Cargo capacity:</div>
              <div className="list-info text-center">{vehicleInfo.cargo_capacity} kgs.</div>
            </li>
            <div className="vr"></div>
            <li className="list-group-item single-cards-info">
              <div className="list-property text-center">Passengers:</div>
              <div className="list-info text-center">{vehicleInfo.passengers}</div>
            </li>
            <div className="vr"></div>
            <li className="list-group-item single-cards-info">
              <div className="list-property text-center">Crew:</div>
              <div className="list-info text-center">{vehicleInfo.crew}</div>
            </li>
            <div className="vr"></div>
            <li className="list-group-item single-cards-info">
              <div className="list-property text-center">Length:</div>
              <div className="list-info text-center">{vehicleInfo.length} mts.</div>
            </li>
            <div className="vr"></div>
            <li className="list-group-item single-cards-info">
              <div className="list-property text-center">Model:</div>
              <div className="list-info text-center">{vehicleInfo.model}</div>
            </li>
            <div className="vr"></div>
            <li className="list-group-item single-cards-info">
              <div className="list-property text-center">Cost:</div>
              <div className="list-info text-center">
                {vehicleInfo.cost_in_credits} credits
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

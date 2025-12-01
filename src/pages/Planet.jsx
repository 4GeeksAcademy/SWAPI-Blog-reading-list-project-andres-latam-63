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
      <div className="container main-container d-flex flex-column justify-content-center mt-5">
        <div
          className="card mb-3 ms-auto me-auto"
          style={{ maxWidth: "800px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${singleplanetId}.jpg`}
                className="img-fluid rounded-start object-fit-cover h-100"
                alt={planetInfo.name}
              />
            </div>
            <div className="col-md-8 d-flex">
              <div className="card-body bg-dark text-white rounded-end">
                <h4 className="card-title text-center">{planetInfo.name}</h4>
                <p className="card-text mt-5 pt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et id
                  magnam consectetur! Saepe culpa eos quas aliquam iusto
                  voluptates voluptatem consequatur, excepturi quos rem quod
                  molestiae, voluptate, obcaecati possimus nam!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-auto me-auto d-flex flex-column">
          <ul className="list-group list-group-horizontal text-white">
            <li className="list-group-item single-cards-info">
              <div className="list-property text-center">Climate:</div>
              <div className="list-info text-center">{planetInfo.climate}</div>
            </li>
            <div className="vr"></div>
            <li className="list-group-item single-cards-info">
              <div className="list-property text-center">Terrain:</div>
              <div className="list-info text-center">{planetInfo.terrain}</div>
            </li>
            <div className="vr"></div>
            <li className="list-group-item single-cards-info">
              <div className="list-property text-center">Gravity:</div>
              <div className="list-info text-center">{planetInfo.gravity}</div>
            </li>
            <div className="vr"></div>
            <li className="list-group-item single-cards-info">
              <div className="list-property">Day duration:</div>
              <div className="list-info text-center">
                {planetInfo.rotation_period} Hours
              </div>
            </li>
            <div className="vr"></div>
            <li className="list-group-item single-cards-info">
              <div className="list-property text-center">Year duration:</div>
              <div className="list-info text-center">{planetInfo.orbital_period} Days</div>
            </li>
            <div className="vr"></div>
            <li className="list-group-item single-cards-info">
              <div className="list-property text-center">Population:</div>
              <div className="list-info text-center">{planetInfo.population}</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

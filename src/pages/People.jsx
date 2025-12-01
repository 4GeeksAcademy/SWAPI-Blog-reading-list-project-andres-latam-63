import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, useParams } from "react-router-dom";

export const People = () => {
  const { store } = useGlobalReducer();
  const { peopleId } = useParams();
  const singlePerson = store.characters.find(
    (character) => character.uid === parseInt(peopleId)
  );

  const [characterInfo, setCharacterInfo] = useState([]);
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
      setCharacterInfo(info);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetInfo();
  }, [characterInfo]);

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
                src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${characterId}.jpg`}
                className="img-fluid rounded-start"
                alt={characterInfo.name}
              />
            </div>
            <div className="col-md-8 d-flex">
              <div className="card-body bg-dark text-white rounded-end">
                <h4 className="card-title text-center">{characterInfo.name}</h4>
                <p className="card-text mt-5 pt-1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fuga, assumenda dolore laboriosam eveniet minima architecto
                  error alias, corporis iure laudantium obcaecati sequi quo
                  exercitationem perferendis beatae illum ex quaerat
                  perspiciatis, doloribus quidem et nemo ab eius dignissimos?
                  Quam placeat iusto deleniti, voluptatum, porro consequatur,
                  quasi dolorum inventore id iure unde?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-auto me-auto d-flex flex-column">
          <ul className="list-group list-group-horizontal text-white">
            <li className="list-group-item single-cards-info">
              <div className="list-property text-center">Gender:</div>
              <div className="list-info text-center">
                {characterInfo.gender}
              </div>
            </li>
            <div className="vr"></div>
            <li className="list-group-item single-cards-info">
              <div className="list-property text-center">Birth year:</div>
              <div className="list-info text-center">
                {characterInfo.birth_year}
              </div>
            </li>
            <div className="vr"></div>
            <li className="list-group-item single-cards-info">
              <div className="list-property text-center">Skin color:</div>
              <div className="list-info text-center">
                {characterInfo.skin_color}
              </div>
            </li>
            <div className="vr"></div>
            <li className="list-group-item single-cards-info">
              <div className="list-property text-center">Hair color:</div>
              <div className="list-info text-center">
                {characterInfo.hair_color}
              </div>
            </li>
            <div className="vr"></div>
            <li className="list-group-item single-cards-info">
              <div className="list-property text-center">Eye color:</div>
              <div className="list-info text-center">
                {characterInfo.eye_color}
              </div>
            </li>
            <div className="vr"></div>
            <li className="list-group-item single-cards-info">
              <div className="list-property text-center">Height:</div>
              <div className="list-info text-center">
                {characterInfo.height} cm.
              </div>
            </li>
            <div className="vr"></div>
            <li className="list-group-item single-cards-info">
              <div className="list-property text-center">Weight:</div>
              <div className="list-info text-center">
                {characterInfo.mass} kgs.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

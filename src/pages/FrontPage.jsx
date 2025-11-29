import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { object } from "prop-types";
import { Link } from "react-router-dom";
import { CharacterCard } from "../components/CharacterCard";

export const FrontPage = () => {
  const { store, dispatch } = useGlobalReducer();

  const FetchCharacters = async () => {
    try {
      const result = await fetch(`https://swapi.tech/api/people`);
      if (!result.ok) {
        console.error(
          `Fetch failed for ID : ${result.status} ${result.statusText}`
        );
      }
      const data = await result.json();
      const characters = data.results;
      dispatch({
        type: "add_characters",
        payload: characters,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const FetchVehicles = async () => {
    try {
      const result = await fetch(`https://swapi.tech/api/vehicles/`);
      if (!result.ok) {
        console.error(
          `Fetch failed for ID : ${result.status} ${result.statusText}`
        );
      }
      const data = await result.json();
      const vehicles = data.results;
      dispatch({
        type: "add_vehicles",
        payload: vehicles,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // FetchCharacters();
    //  FetchVehicles();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Characters:</h1>
        <ul className="list-group list-group-horizontal overflow-x-scroll">
          {store.characters.map((item) => {
            return (
              <CharacterCard character={item}/>
            );
          })}
        </ul>
        <h1>Vehicles:</h1>
        <ul className="list-group list-group-horizontal overflow-x-scroll">
          {store.vehicles.map((item) => {
            return (
              <li className="list-group-item">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${item.uid}.jpg`}
                    className="card-img-top"
                    alt={`Picture of ${item.name}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card’s content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

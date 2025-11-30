import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { object } from "prop-types";
import { Link } from "react-router-dom";
import { DisplayCard } from "../components/DisplayCard";

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

  const FetchPlanets = async () => {
    try {
      const result = await fetch(`https://swapi.tech/api/planets`);
      if (!result.ok) {
        console.error(
          `Fetch failed for ID : ${result.status} ${result.statusText}`
        );
      }
      const data = await result.json();
      const planets = data.results;
      dispatch({
        type: "add_planets",
        payload: planets,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
     FetchCharacters();
      FetchVehicles();
     FetchPlanets();
  }, []);

  return (
    <>
      <div className="container main-container">
        <div className="pt-4 pb-4">
          <img src="https://see.fontimg.com/api/rf5/A4lL/OGYzMWMyNDE3ZDYwNGRhNGI3ZDFmOTAxYzgyMjMzMWUudHRm/Y2hhcmFjdGVyczo/star-jedi-hollow.png?r=fs&h=63&w=1000&fg=FFFFFF&bg=050505&tb=1&s=63" />
        </div>
        <ul className="list-group list-group-horizontal overflow-x-scroll card-list">
          {store.characters.map((character) => {
            return <DisplayCard item={character} />;
          })}
        </ul>
        <div className="pt-4 pb-4">
          <img src="https://see.fontimg.com/api/rf5/A4lL/OGYzMWMyNDE3ZDYwNGRhNGI3ZDFmOTAxYzgyMjMzMWUudHRm/dmVoaWNsZXM6/star-jedi-hollow.png?r=fs&h=63&w=1000&fg=FFFFFF&bg=050505&tb=1&s=63" />
        </div>
        <ul className="list-group list-group-horizontal overflow-x-scroll">
          {store.vehicles.map((vehicle) => {
            return <DisplayCard item={vehicle} />;
          })}
        </ul>
        <div className="pt-4 pb-4">
          <img src="https://see.fontimg.com/api/rf5/A4lL/OGYzMWMyNDE3ZDYwNGRhNGI3ZDFmOTAxYzgyMjMzMWUudHRm/cGxhbmV0czo/star-jedi-hollow.png?r=fs&h=63&w=1000&fg=FFFFFF&bg=050505&tb=1&s=63" />
        </div>
        <ul className="list-group list-group-horizontal overflow-x-scroll">
          {store.planets.map((planet) => {
            return <DisplayCard item={planet} />;
          })}
        </ul>
        <div className="extra mb-0">
          <p className="mb-0">H</p>
        </div>
      </div>
    </>
  );
};

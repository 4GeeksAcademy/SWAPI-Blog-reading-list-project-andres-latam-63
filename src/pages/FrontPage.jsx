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
    // FetchVehicles();
    // FetchPlanets();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Characters:</h1>
        <ul className="list-group list-group-horizontal overflow-x-scroll">
          {store.characters.map((character) => {
            return <DisplayCard item={character} />;
          })}
        </ul>
        <h1>Vehicles:</h1>
        <ul className="list-group list-group-horizontal overflow-x-scroll">
          {store.vehicles.map((item) => {
            return <DisplayCard item={item} />;
          })}
        </ul>
        <h1>Planets:</h1>
        <ul className="list-group list-group-horizontal overflow-x-scroll">
          {store.planets.map((item) => {
            return <DisplayCard item={item} />;
          })}
        </ul>
      </div>
    </>
  );
};

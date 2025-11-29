import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Favorites = ({item}) => {

    const {store}= useGlobalReducer()

  const url = item.url;
  const urlInfo = url.replace("https://www.swapi.tech/api/", "");

  return (
    <>
      <Link to={`/${urlInfo}`}>
        <li className="dropdown-item">{item.name}</li>
      </Link>
    </>
  );
};

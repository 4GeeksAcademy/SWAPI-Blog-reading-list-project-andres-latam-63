import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Favorites = ({ item }) => {
  const { store, dispatch } = useGlobalReducer();

  const url = item.url;
  const urlInfo = url.replace("https://www.swapi.tech/api/", "");

  const HandleClick = ()=>{
    dispatch({
      type:'remove_favorite',
      payload: item.name
    })
  }

  return (
    <>
      <li className="dropdown-item" id={item.name}>
        <div className="d-flex justify-content-between align-items-center">
        <Link to={`/${urlInfo}`}>{item.name} </Link>
         <i class="fa-solid fa-xmark delete-icon" onClick={()=>{HandleClick(item.name)}}></i>
        </div>
      </li>
    </>
  );
};

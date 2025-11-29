import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const DisplayCard = ({ item }) => {

  const{store,dispatch}= useGlobalReducer();

  const HandleClick = (item)=>{
    dispatch({
      type: 'add_favorite',
      payload: item,
    })

  }

  const url = item.url
  const urlInfo = url.replace('https://www.swapi.tech/api/','')
  return (
    <>
      <li className="list-group-item" key={item.uid}>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${urlInfo}.jpg`}
            className="card-img-top"
            alt={`Picture of ${item.name}`}
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <Link to={urlInfo}>
              <button type="button" className="btn btn-primary">
                Learn More
              </button>
            </Link>
            <button type="button" className="btn btn-warning ms-auto" onClick={()=>{HandleClick(item)}}>
                Add to Favorites
              </button>
          </div>
        </div>
      </li>
    </>
  );
};

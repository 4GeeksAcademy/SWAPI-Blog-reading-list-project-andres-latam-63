import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";

export const DisplayCard = ({ item }) => {
  const { store, dispatch } = useGlobalReducer();

  const [color, setColor] = useState("black");

  const FavoriteList = store.favorites;

  const HandleClick = (item) => {
    const isFavorite = FavoriteList.some(
      (favorite) => favorite.name === item.name
    );
    if (!isFavorite) {
      dispatch({
        type: "add_favorite",
        payload: item,
      });
    } else {
      dispatch({
        type: "remove_favorite",
        payload: item.name,
      });
    }
  };

  const LikeColor = (item) => {
    const isFavorite = FavoriteList.some((favorite) => favorite.name === item);
    if (isFavorite) {
      setColor("red");
    } else {
      setColor("black");
    }
  };

  useEffect(() => {
    LikeColor(item.name);
  }, [FavoriteList]);

  const url = item.url;
  const urlInfo = url.replace("https://www.swapi.tech/api/", "");
  return (
    <>
      <li className="list-group-item mb-3 display-cards-list" key={item.name}>
        <div className="container h-100">
          <div className="card h-100" style={{ width: "18rem" }}>
            <img
              src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${urlInfo}.jpg`}
              className="card-img-top object-fit-cover"
              alt={`Picture of ${item.name}`}
            />
            <div className="card-body bg-dark text-white rounded-bottom d-flex flex-column">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </p>
              <div className="d-flex justify-content-between mt-auto">
                <Link to={urlInfo}>
                  <button type="button" className="btn btn-light">
                    Learn More <i class="fa-solid fa-book-journal-whills"></i>
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-light ms-5"
                  onClick={() => {
                    HandleClick(item);
                    LikeColor(item.name);
                  }}
                >
                  <i class="fa-solid fa-heart" style={{ color: color }}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

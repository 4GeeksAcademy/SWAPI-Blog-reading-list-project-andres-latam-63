import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const DisplayCard = ({ item }) => {
  const { store, dispatch } = useGlobalReducer();

  const HandleClick = (item) => {
    dispatch({
      type: "add_favorite",
      payload: item,
    });
  };

  const url = item.url;
  const urlInfo = url.replace("https://www.swapi.tech/api/", "");
  return (
    <>
      <li className="list-group-item mb-3 display-cards-list" key={item.uid}>
        <div className="container">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${urlInfo}.jpg`}
              className="card-img-top object-fit-cover"
              alt={`Picture of ${item.name}`}
            />
            <div className="card-body bg-dark text-white rounded-bottom">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum
                expedita cumque neque dicta rerum.
              </p>
              <div className="d-flex justify-content-between">
                <Link to={urlInfo}>
                  <button type="button" className="btn btn-primary">
                    Learn More <i class="fa-solid fa-book-journal-whills"></i>
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-danger ms-5"
                  onClick={() => {
                    HandleClick(item);
                  }}
                >
                  <i class="fa-solid fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

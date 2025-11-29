import { Link } from "react-router-dom";
import storeReducer from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Favorites } from "./Favorites";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container">
        <Link to="/">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png"
            style={{ width: "7%", height: "7%" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <button
                type="button"
                className="nav-link dropdown-toggle "
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li className="dropdown-item"><i class="fa-solid fa-book-journal-whills"></i> Favorites:</li>
                {store.favorites.map((item) => {
                  return <Favorites item={item} />;
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

import { Link } from "react-router-dom";
import storeReducer from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Favorites } from "./Favorites";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();
  return (
    <nav className="navbar navbar-expand-lg bg-body-dark border-bottom ps-5 pe-5">
      <div className="container-fluid d-flex">
        <Link to="/">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/starwars-logo-black-and-white.png"
            style={{ width: "150px", height: "100px" }}
          />
        </Link>

        <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <button
              type="button"
              className="nav-link dropdown-toggle text-white"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
            ><i class="fa-solid fa-jedi"></i>
              FAVORITES
            </button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
              <li className="dropdown-item">
                <i className="fa-solid fa-book-journal-whills"></i> Favorites:
              </li>
              {store.favorites.map((item) => {
                return <Favorites item={item} />;
              })}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

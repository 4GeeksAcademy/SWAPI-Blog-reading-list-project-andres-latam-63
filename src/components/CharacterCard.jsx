import { Link } from "react-router-dom";

export const CharacterCard = ({ character }) => {
  return (
    <>
      <li className="list-group-item">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${character.uid}.jpg`}
            className="card-img-top"
            alt={`Picture of ${character.name}`}
          />
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <Link to={"people/" + character.uid}>
              <button type="button" className="btn btn-primary">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </li>
    </>
  );
};

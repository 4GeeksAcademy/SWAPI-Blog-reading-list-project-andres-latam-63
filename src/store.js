export const initialStore = () => {
  return {
    message: null,
    characters: [],
    vehicles: [],
    planets: [],
    singleCard: [],
    favorites: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_characters":
      return {
        ...store,
        characters: action.payload,
      };
    case "add_vehicles":
      return {
        ...store,
        vehicles: action.payload,
      };
    case "add_planets":
      return {
        ...store,
        planets: action.payload,
      };

    case "add_single_card_info":
      return {
        ...store,
        singleCard: action.payload,
      };

    case "add_favorite":
      const itemExists = store.favorites.some(
        (item) => item.name === action.payload.name
      );
      if (itemExists) {
        return store;
      } else {
        return {
          ...store,
          favorites: [...store.favorites, action.payload],
        };
      }

    case "remove_favorite":
      return {
        ...store,
        favorites: [
          ...store.favorites.filter(
            (favorite) => favorite.name !== action.payload
          ),
        ],
      };
    default:
      throw Error("Unknown action.");
  }
}

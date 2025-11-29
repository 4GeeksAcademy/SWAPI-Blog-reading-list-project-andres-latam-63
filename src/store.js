export const initialStore = () => {
  return {
    message: null,
    characters: [],
    vehicles: [],
    planets: [],
    singleCard: [],
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
    default:
      throw Error("Unknown action.");
  }
}

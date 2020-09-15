import { ADD_PLACE, SET_PLACES } from "./places-actions";
import Place from "../models/place";

const initialState = {
  places: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PLACES:
      return {
        places: action.places.map()
      };

    case ADD_PLACE:
      const newPlace: any = new Place(
        action.placeData.id.toString(),
        action.placeData.title,
        action.placeData.image
      );
      return {
        places: state.places.concat(newPlace),
      };
    default:
      return state;
  }
};

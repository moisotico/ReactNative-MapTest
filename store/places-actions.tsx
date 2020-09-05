export const ADD_PLACE = "ADD_PLACE";

export const addPlace = (title: any) => {
  return { type: ADD_PLACE, placeData: { title: title } };
};

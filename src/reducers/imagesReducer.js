import { IMAGES } from "../constansts";

const imagesReducer = (state = [], action) => {
  if (action.type === IMAGES.LOAD_SUCCESS) {
    return [...state, ...action.images];
  }
};

export default imagesReducer;

import { IMAGES } from "../constansts";

const imagesReducer = (state = [], action) => {
  if (action.type === IMAGES.LOAD_SUCCESS) {
    return [...state, ...action.images];
  }else{
    return state;
  }
};

export default imagesReducer;

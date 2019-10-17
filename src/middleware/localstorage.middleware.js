import {setItem} from "../utils/localstorage.utils";
import {SET_ITEM} from "../constants/action-types";

export const localstorageMiddleware = () => (next) => (action) => {

  if(!action.meta || !action.meta.localstorage){
    next(action);
    return;
  }

  switch (action.type) {
    case SET_ITEM:
      const key = action.payload.key;
      const value = action.payload.value;
      setItem(key, value);
      break;
    default:
      break;
  }
  next(action);
};






export const thunkMiddleware = (dispatch) => (next) => (action) => {
  next(action);
  if (typeof action === 'function') {
    action(dispatch);
  }

};
import {SET_ITEM} from "../../constants/action-types";

export const setItem = (key, value) => ({
  type: SET_ITEM,
  meta: {
    localstorage: true
  },
  payload: {
    key,
    value
  }
});
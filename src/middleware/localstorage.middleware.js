import {setItem} from "../utils/localstorage.utils";
import {AUTH_SUCCESS, SAVE_PROJECT, UPDATE_PROJECT, DELETE_PROJECT, OPEN_PROJECT, SET_PROJECT_HOURS} from "../constants/action-types";

const projectsType = [SAVE_PROJECT, UPDATE_PROJECT, DELETE_PROJECT, SET_PROJECT_HOURS, OPEN_PROJECT];

export const localstorageMiddleware = ({getState}) => (next) => (action) => {
  next(action);

  const {type} = action;

  const store = getState();

  if (type === AUTH_SUCCESS) {
    setItem("auth", store.auth);
    setItem("projects", store.projects);
  } else if (projectsType.includes(type)) {
    setItem("projects", store.projects);
  }
};
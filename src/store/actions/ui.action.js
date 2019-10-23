import * as actions from '../../constants/action-types';


export const openAddWindow = () => {
  return {
    type: actions.OPEN_ADD_WINDOW
  }
};

export const openEditWindow = (id, label) => {
  return {
    type: actions.OPEN_EDIT_WINDOW,
    payload: {
      id: id,
      label: label
    }
  }
};

export const closeWindow = () => {
  return {
    type: actions.CLOSE_WINDOW
  }
};
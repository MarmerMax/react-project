import * as actions from '../../constants/action-types';

export const openProject = (id) => {
  return {
    type: actions.OPEN_PROJECT,
    payload: {
      id
    }
  }
};

export const addProject = () => {
  return {
    type: actions.ADD_PROJECT
  }
};

export const editProject = (id) => {
  return {
    type: actions.EDIT_PROJECT,
    payload: {
      id
    }
  }
};

export const saveProject = (project) => {
  return {
    type: actions.SAVE_PROJECT,
    payload: {
      project
    }
  }
};

export const deleteProject = (id) => {
  return {
    type: actions.DELETE_PROJECT,
    payload: {
      id
    }
  }
};
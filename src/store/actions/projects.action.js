import * as actions from '../../constants/action-types';

export const openProject = (id) => {
  return {
    type: actions.OPEN_PROJECT,
    payload: {
      id
    }
  }
};

export const closeProject = () => {
  return {
    type: actions.CLOSE_PROJECT
  }
};

export const setProjectHours = (date, hours) => {
  return {
    type: actions.SET_PROJECT_HOURS,
    payload: {
      date,
      hours
    }
  }
};

export const addProject = () => {
  return {
    type: actions.ADD_PROJECT
  }
};

export const editProject = (id, label) => {
  return {
    type: actions.EDIT_PROJECT,
    payload: {
      id: id,
      label: label
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

export const updateProject = (label) => {
  return {
    type: actions.UPDATE_PROJECT,
    payload: {
      label: label
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
import * as actions from '../../consts/action-types';

const InitialState = {
  projects: [],
  showAddProject: false,
  showEditProject: false
};

const addProject = (state) => {
  return {
    ...state,
    showAddProject: true
  }
};

const editProject = (state, id) => {
  return {
    ...state,
    showEditProject: true
  }
};

const deleteProject = (state, id) => {
  const productsAfterDelete = state.projects.filter(item => item.id !== id);
  return {
    ...state,
    products: productsAfterDelete
  }
};

const saveProject = (state, project) => {

};

const projectsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actions.OPEN_PROJECT:
      // openProject();
    case actions.ADD_PROJECT:
      addProject(state);
    case actions.EDIT_PROJECT:
      editProject(state, action.payload.id);
    case actions.DELETE_PROJECT:
      deleteProject(state, action.payload.id);
    case actions.SAVE_PROJECT:
      saveProject(state, action.payload.project);
  }

};

export default projectsReducer;
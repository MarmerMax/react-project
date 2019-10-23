import * as actions from '../../constants/action-types';

const InitialState = {
  projects: [{ label: '222', id: '23', hours: {} }],
  open: {
    id: ''
  }
};

const openProject = (state, id) => {
  return {
    ...state,
    open: {
      id
    }
  }
};

const setProjectHours = (state, date, hours) => {
  const prevHours = state.projects.find(project => project.id === state.open.id).hours;
  const tempHours = {...prevHours};
  tempHours[date] = hours;

  const indexOfProject = state.projects.findIndex(project => project.id === state.open.id);
  let projects = [...state.projects];
  projects[indexOfProject].hours = tempHours;

  return {
    ...state,
    projects: projects
  }
};

const deleteProject = (state, id) => {
  const projects = state.projects.filter(item => item.id !== id);
  return {
    ...state,
    projects: projects
  }
};

const saveProject = (state, project) => {
  return {
    ...state,
    projects: [...state.projects, project]
  }
};

const updateProject = (state, id, label) => {
  const indexOfChangedProject = state.projects.findIndex(project => project.id === id);
  let projects = [...state.projects];
  projects[indexOfChangedProject].label = label;

  return {
    ...state,
    projects: projects
  }
};

const projectsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actions.OPEN_PROJECT:
      return openProject(state, action.payload.id);
    case actions.UPDATE_PROJECT:
      return updateProject(state, action.payload.id, action.payload.label);
    case actions.SET_PROJECT_HOURS:
      return setProjectHours(state, action.payload.date, action.payload.hours);
    case actions.DELETE_PROJECT:
      return deleteProject(state, action.payload.id);
    case actions.SAVE_PROJECT:
      return saveProject(state, action.payload.project);
    default:
      return state;
  }

};

export default projectsReducer;
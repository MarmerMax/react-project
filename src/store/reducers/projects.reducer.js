import * as actions from '../../constants/action-types';

const InitialState = {
  projects: [{ label: '222', id: '23', hours: {} }],
  show: {
    addProject: false,
    editProject: false
  },
  edit: {
    id: '',
    label: ''
  },
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

const addProject = (state) => {
  return {
    ...state,
    show: {
      ...state.show,
      addProject: true
    }
  }
};

const editProject = (state, id, label) => {
  return {
    ...state,
    show: {
      ...state.show,
      editProject: true
    },
    edit: {
      ...state.edit,
      id: id,
      label: label
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
    projects: [...state.projects, project],
    show: {
      ...state.show,
      addProject: false
    }
  }
};

const updateProject = (state, label) => {
  const indexOfChangedProject = state.projects.findIndex(project => project.id === state.edit.id);
  let projects = [...state.projects];
  projects[indexOfChangedProject].label = label;

  return {
    ...state,
    show: {
      ...state.show,
      editProject: false
    },
    projects: projects,
    edit: {
      ...state.edit,
      id: '',
      label: ''
    }
  }
};

const closeProject = (state) => {
  return {
    ...state,
    show: {
      addProject: false,
      editProject: false
    },
    edit: {
      id: '',
      label: ''
    }
  }
};

const projectsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actions.OPEN_PROJECT:
      return openProject(state, action.payload.id);
    case actions.ADD_PROJECT:
      return addProject(state);
    case actions.EDIT_PROJECT:
      return editProject(state, action.payload.id, action.payload.label);
    case actions.UPDATE_PROJECT:
      return updateProject(state, action.payload.label);
    case actions.SET_PROJECT_HOURS:
      return setProjectHours(state, action.payload.date, action.payload.hours);
    case actions.DELETE_PROJECT:
      return deleteProject(state, action.payload.id);
    case actions.SAVE_PROJECT:
      return saveProject(state, action.payload.project);
    case actions.CLOSE_PROJECT:
      return closeProject(state);
    default:
      return state;
  }

};

export default projectsReducer;
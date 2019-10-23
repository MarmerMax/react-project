import * as actions from '../../constants/action-types';

const InitialState = {
  show: {
    addWindow: false,
    editWindow: false
  },
  edit: {
    id: '',
    label: ''
  }
};

const openAddWindow = (state) => {
  return {
    ...state,
    show: {
      ...state.show,
      addWindow: true
    }
  }
};

const openEditWindow = (state, id, label) => {
  return {
    ...state,
    show: {
      ...state.show,
      editWindow: true
    },
    edit: {
      ...state.edit,
      id: id,
      label: label
    }
  }
};

const closeWindow = (state) => {
  return {
    ...state,
    show: {
      addWindow: false,
      editWindow: false
    },
    edit: {
      id: '',
      label: ''
    }
  }
};

const uiReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actions.OPEN_ADD_WINDOW:
      return openAddWindow(state);
    case actions.OPEN_EDIT_WINDOW:
      return openEditWindow(state, action.payload.id, action.payload.label);
    case actions.CLOSE_WINDOW:
      return closeWindow();
    default:
      return state;
  }
};

export default uiReducer;
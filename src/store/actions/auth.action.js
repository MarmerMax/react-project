import * as actions from '../../constants/action-types';

export const authStart = () => {
  return {
    type: actions.AUTH_START
  }
};

export const authLogin = () => {
  return dispatch => {
    dispatch(authStart());
    localStorage.setItem('isAuth', JSON.stringify(true));
    dispatch(authSuccess());
  }
};

export const authSuccess = () => {
  return {
    type: actions.AUTH_SUCCESS
  }
};

export const authCheckState = () => {
  return dispatch => {
    const isAuth = localStorage.getItem('isKey');
    if (!isAuth) {
      // dispatch(logout());
    } else {
      dispatch(authSuccess());
    }
  }
};
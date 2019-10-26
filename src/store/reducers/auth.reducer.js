import * as actionTypes from '../../constants/action-types';

const initialState = {
  token: null,
  userId: null,
  error: null,
  isAuth: false,
  loading: false
};

// const authLogin = (state) => {
//   return {
//     ...state,
//     isAuth: true,
//     loading: false
//   }
// };

const authStart = (state) => {
  return {
    ...state,
    error: null,
    loading: true
  };
};

const authSuccess = (state, payload) => {
  return {
    ...state,
    token: payload.idToken,
    userId: payload.userId,
    error: null,
    loading: false,
    isAuth: true
  };
};

const authFail = (state, payload) => {
  return {
    ...state,
    error: payload.error,
    loading: false
  }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action.payload);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action.payload);
    // case actionTypes.AUTH_LOGIN:
    //   return authLogin(state);
    default:
      return state;
  }
};

export default authReducer;
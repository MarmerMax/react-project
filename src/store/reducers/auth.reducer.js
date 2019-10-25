import * as actions from '../../constants/action-types';

const initialState = {
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
    loading: true
  };
};

const authSuccess = (state) => {
  return {
    ...state,
    isAuth: true,
    loading: false
  };
};

const authReducer = (state = initialState, action) => {
  // switch (action.type) {
  //   case actions.AUTH_START:
  //     return authStart(state);
  //   case actions.AUTH_SUCCESS:
  //     return authSuccess(state);
  //   // case actions.AUTH_LOGIN:
  //   //   return authLogin(state);
  //   default:
      return state;
  // }
};

export default authReducer;
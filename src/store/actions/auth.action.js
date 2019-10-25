import * as actions from '../../constants/action-types';
import axios from 'axios';

export const authStart = () => {
  return {
    type: actions.AUTH_START
  }
};

// export const authLogin = () => {
//   return dispatch => {
//     dispatch(authStart());
//     localStorage.setItem('isAuth', JSON.stringify(true));
//     dispatch(authSuccess());
//   }
// };

// export const authSuccess = () => {
//   return {
//     type: actions.AUTH_SUCCESS
//   }
// };

export const authSuccess = (authData) => {
  return {
    type: actions.AUTH_SUCCESS,
    authData: authData
  }
};

export const authFail = (error) => {
  return {
    type: actions.AUTH_SUCCESS,
    error: error
  }
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    console.log('authData', authData)
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCm5S7isCjeefcU7we0Wj8dzPG-o6t-n9U', authData)
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data));
      })
      .catch(err => {
        console.log("fucking error", err);
        dispatch(authFail(err));
      })
  }
};

// export const authCheckState = () => {
//   return dispatch => {
//     const isAuth = localStorage.getItem('isKey');
//     if (!isAuth) {
//       // dispatch(logout());
//     } else {
//       dispatch(authSuccess());
//     }
//   }
// };
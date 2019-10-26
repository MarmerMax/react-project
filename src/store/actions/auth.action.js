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

export const authSuccess = (token, userId) => {
  return {
    type: actions.AUTH_SUCCESS,
    payload: {
      idToken: token,
      userId: userId
    }
  }
};

export const authFail = (error) => {
  return {
    type: actions.AUTH_FAIL,
    payload: {
      error: error
    }
  }
};

export const auth = (email, password, isSignin) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCm5S7isCjeefcU7we0Wj8dzPG-o6t-n9U';
    if (!isSignin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCm5S7isCjeefcU7we0Wj8dzPG-o6t-n9U';
    }
    axios.post(url, authData)
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
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
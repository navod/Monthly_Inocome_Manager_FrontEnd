import {
  LOGIN_USER_FAILED,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
} from './actionTypes';
import api from '../../../util/Api';

const loginStart = () => {
  return {
    type: LOGIN_USER_START,
  };
};

const loginSuccess = userId => {
  return {
    type: LOGIN_USER_SUCCESS,
    userId,
  };
};

const loginSFaild = payload => {
  return {
    type: LOGIN_USER_FAILED,
    payload,
  };
};

export const userLogin = (username, contact, navigation) => {
  // const json = ;
  return dispatch => {
    dispatch(loginStart());
    api
      .post('/api/users/login', {
        username: username,
        contact: contact,
      })
      .then(e => {
        dispatch(loginSuccess(e.data));

        navigation.navigate('BottomTabScreen');
      })
      .catch(error => {
        alert('Undefined user');
        dispatch(loginSFaild(error.Error));
      });
  };
};

export const createUser = (username, contact, navigation) => {
  // const json = ;
  return dispatch => {
    dispatch(loginStart());
    api
      .post('/api/users/save', {
        username: username,
        contact: contact,
      })
      .then(e => {
        dispatch(loginSuccess(e.data));
        navigation.navigate('BottomTabScreen');
      })
      .catch(error => {
        alert('Undefined user');
        dispatch(loginSFaild(error.Error));
      });
  };
};

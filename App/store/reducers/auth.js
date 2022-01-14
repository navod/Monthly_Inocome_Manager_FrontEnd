import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
} from '../actions/Auth/actionTypes';

const initialState = {
  userId: null,
  loading: false,
  error: null,
};

const loginStart = (state, action) => {
  return {...state, error: null, loading: true};
};

const loginSuccess = (state, action) => {
  return {...state, userId:action.userId, loading: false};
};

const loginFailed = (state, action) => {
  return {...state, ...action.payload, loading: false};
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_START:
      return loginStart(state, action);
    case LOGIN_USER_SUCCESS:
      return loginSuccess(state, action);
    case LOGIN_USER_FAILED:
      return loginFailed(state, action);
    default:
      return state;
  }
};

export default reducer;

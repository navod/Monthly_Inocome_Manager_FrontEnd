import {
  GET_WHISHLIST_FAIL,
  GET_WHISHLIST_START,
  GET_WHISHLIST_SUCCESS,
} from '../actions/Whishlist/actionTypes';

const initialState = {
  loading: false,
  whishlistDetails: [],
  error: null,
};

const whishlistStart = (state, action) => {
  return {...state, ...action, loading: true};
};

const whishlistSuccsess = (state, action) => {
  return {...state, whishlistDetails: action.whishlistDetails, loading: false};
};

const whishListFailed = (state, action) => {
  return {...state, whishlistDetails: action.payload, loading: false};
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WHISHLIST_START:
      return whishlistStart(state, action);
    case GET_WHISHLIST_SUCCESS:
      return whishlistSuccsess(state, action);
    case GET_WHISHLIST_FAIL:
      return whishListFailed(state, action);

    default:
      return state;
  }
};

export default reducer;

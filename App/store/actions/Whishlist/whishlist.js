import {format} from 'date-fns';
import api from '../../../util/Api';
import {
  GET_WHISHLIST_FAIL,
  GET_WHISHLIST_START,
  GET_WHISHLIST_SUCCESS,
} from './actionTypes';

const whishlistStart = () => {
  return {
    type: GET_WHISHLIST_START,
  };
};

const whishlistSuccess = whishlistDetails => {
  return {
    type: GET_WHISHLIST_SUCCESS,
    whishlistDetails,
  };
};

const whishlistFailed = payload => {
  return {
    type: GET_WHISHLIST_FAIL,
    payload,
  };
};

export const saveWhishlist = (
  saveTo,
  description,
  color,
  saveType,
  userId,
  savedDate,
  savedAmount,
) => {
  return dispatch => {
    dispatch(whishlistStart());
    api
      .post('/api/whilist/add', {
        saveTo: saveTo,
        description: description,
        color: color,
        saveType: saveType,
        startSaveDate: savedDate,
        userId: userId,
        savedAmount: savedAmount,
        savedDate: savedDate,
      })
      .then(e => {
        dispatch(getWhishlistDetails(userId));
      })
      .catch(error => {
        dispatch(whishlistFailed(error.Error));
      });
  };
};
export const getWhishlistDetails = userId => {
  // const json = ;
  return dispatch => {
    dispatch(whishlistStart());
    api
      .get('/api/whishlistGet', {
        params: {userId: userId},
      })
      .then(e => {
        dispatch(whishlistSuccess(e.data));
      })
      .catch(error => {
        dispatch(whishlistFailed(error.Error));
      });
  };
};

export const updateWhishlist = (whishId, userId, savedAmount) => {
  // const json = ;
  return dispatch => {
    dispatch(whishlistStart());
    api
      .put(`/api/updateWhishlit/${whishId}`, {
        savedAmount: savedAmount,
        savedDate: String(format(new Date(), 'dd-MM-yyyy')),
      })
      .then(e => {
        dispatch(getWhishlistDetails(userId));
      })
      .catch(error => {
        dispatch(whishlistFailed(error.Error));
      });
  };
};

export const deleteWhishlist = (whishId, userId) => {

  return dispatch => {
    dispatch(whishlistStart());
    api
      .delete(`/api/deletewhishlist/${whishId}`)
      .then(e => {
        dispatch(getWhishlistDetails(userId));
      })
      .catch(error => {
        dispatch(whishlistFailed(error.Error));
      });
  };
};

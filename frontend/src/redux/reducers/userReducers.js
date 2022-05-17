import USER_CONSTANTS from '../constants/userConstants';

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CONSTANTS.USER_REGISTER_REQUEST:
      return { loading: true };

    case USER_CONSTANTS.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_CONSTANTS.USER_REGISTER_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userLoginReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case USER_CONSTANTS.USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_CONSTANTS.USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };

    case USER_CONSTANTS.USER_LOGIN_FAILED:
      return { loading: false, error: action.payload };

    case USER_CONSTANTS.USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_CONSTANTS.USER_DETAILS_REQUEST:
      return { ...state, loading: true };

    case USER_CONSTANTS.USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };

    case USER_CONSTANTS.USER_DETAILS_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userProfileUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CONSTANTS.USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };

    case USER_CONSTANTS.USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };

    case USER_CONSTANTS.USER_UPDATE_PROFILE_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

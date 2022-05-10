import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers';
import { cartReducers } from './reducers/cartReducers';
import {
  userDetailsReducer,
  userLoginReducer,
  userProfileUpdateReducer,
  userRegisterReducer,
} from './reducers/userReducers';

import { composeWithDevTools } from 'redux-devtools-extension';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const INITIAL_STATE = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = configureStore(
  {
    reducer: combineReducers({
      productList: productListReducer,
      productDetail: productDetailsReducer,
      cart: cartReducers,
      userLogin: userLoginReducer,
      userRegister: userRegisterReducer,
      userDetails: userDetailsReducer,
      userUpdateProfile: userProfileUpdateReducer,
    }),
  },
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

import { combineReducers } from '@reduxjs/toolkit';
import cart from '../slice/cartSlice';
import filter from '../slice/filterSlice';

export default combineReducers({ filter, cart });

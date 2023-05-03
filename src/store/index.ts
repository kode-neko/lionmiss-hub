import { configureStore } from '@reduxjs/toolkit';
import {
  userActions,
  userReducer
} from './user';

// eslint-disable-next-line @typescript-eslint/typedef
const store = configureStore({
  reducer: {
    user: userReducer
  }
});

export default store;
export {
  userActions
};
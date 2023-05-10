import { configureStore } from '@reduxjs/toolkit';
import {
  UserState,
  userActions,
  userReducer
} from './user';

// eslint-disable-next-line @typescript-eslint/typedef
const store = configureStore({
  reducer: {
    user: userReducer
  }
});

type AppState = {
  user: UserState
}

export {
  store,
  userActions
};

export type {
  AppState
};

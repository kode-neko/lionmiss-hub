import { createSlice,Slice,PayloadAction,Reducer, CaseReducerActions } from '@reduxjs/toolkit';
import { ThemeLMH } from '../models';

type UserState = {
  lang: string;
  theme: string;
}

const initialState: UserState = {
  lang: 'es',
  theme: ThemeLMH.LIGHT
};

const userSlice: Slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeTheme: (state: UserState, { payload: theme }: PayloadAction<ThemeLMH>) => {
      state.theme = theme;
    },
    changeLang: (state: UserState, { payload: lang }: PayloadAction<string>) => {
      state.lang = lang;
    }
  }
});

// eslint-disable-next-line @typescript-eslint/typedef
const userActions = userSlice.actions;
const userReducer: Reducer<UserState> = userSlice.reducer;

export {
  userActions,
  userReducer
};

export type {
  UserState
};
import { createSlice,Slice,PayloadAction,Reducer } from '@reduxjs/toolkit';

type UserState = {
  lang: string;
  theme: string;
}

const initialState: UserState = {
  lang: 'es',
  theme: 'light'
};

const userSlice: Slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeTheme: (state: UserState, action: PayloadAction<string>) => {
      state.theme = action.payload;
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
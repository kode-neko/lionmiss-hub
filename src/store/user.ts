import {createSlice} from '@reduxjs/'

type UserState = {
  lang: string;
  theme: string;
}

const initialState: UserState = {
  lang: 'es',
  theme: 'light'
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    change
  }
})
import { createSlice } from '@reduxjs/toolkit';
import {
  logOutUserThunk,
  loginUserThunk,
  refreshUserThunk,
  registerUserThunk,
} from './options';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(registerUserThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginUserThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(logOutUserThunk.fulfilled, (state, { payload }) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logOutUserThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(refreshUserThunk.pending, (state, _) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUserThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;

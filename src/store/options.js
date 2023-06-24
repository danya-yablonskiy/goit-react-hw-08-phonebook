import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from './API/getContacts';
import { postContacts } from './API/postContacts';
import { deleteContacts } from './API/deleteContacts';
import { registerUser } from './API/registerUser';
import axios from 'axios';
import { loginUser } from './API/loginUser';
import { logOutUser } from './API/logOutUser';
import { refreshUser } from './API/refreshUser';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = token => {
  axios.defaults.headers.common.Authorization = '';
};

export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    return await getContacts();
  }
);

export const postContactsThunk = createAsyncThunk(
  'contacts/postContacts',
  async newContact => {
    return await postContacts(newContact);
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async idContacts => {
    return await deleteContacts(idContacts);
  }
);

export const registerUserThunk = createAsyncThunk(
  'auth/register',
  async newUser => {
    const res = await registerUser(newUser);

    setAuthHeader(res.token);
    return res;
  }
);

export const loginUserThunk = createAsyncThunk('auth/login', async user => {
  const res = await loginUser(user);
  setAuthHeader(res.token);
  return res;
});

export const logOutUserThunk = createAsyncThunk('auth/logout', async () => {
  await logOutUser();
  clearAuthHeader();
});

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;

    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    }
    setAuthHeader(token);
    const res = await refreshUser();
    return res;
  }
);

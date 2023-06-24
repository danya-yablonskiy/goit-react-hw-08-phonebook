import { createSlice } from '@reduxjs/toolkit';

import {
  deleteContactsThunk,
  getContactsThunk,
  postContactsThunk,
} from './options';

export const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    isAdding: false,
    isDeleting: false,
    error: null,
  },
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = '';
        state.contacts.items = payload;
      })
      .addCase(getContactsThunk.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })
      .addCase(postContactsThunk.pending, state => {
        state.contacts.isAdding = true;
      })
      .addCase(postContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isAdding = false;
        state.contacts.error = '';
        state.contacts.items.push(payload);
      })
      .addCase(postContactsThunk.rejected, (state, { payload }) => {
        state.contacts.isAdding = false;
        state.contacts.error = payload;
      })
      .addCase(deleteContactsThunk.pending, state => {
        state.contacts.isDeleting = true;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isDeleting = false;
        state.contacts.error = '';
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload.id
        );
      })
      .addCase(deleteContactsThunk.rejected, (state, { payload }) => {
        console.log(payload);
        state.contacts.isDeleting = false;
        state.contacts.error = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

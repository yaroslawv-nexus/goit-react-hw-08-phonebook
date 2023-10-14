import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, editContact } from "./operations";


const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const slice = createSlice({
    name: "contacts",
    initialState: {
    contactsList: [],
    isLoading: false,
      error: null,
    },
    
    extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
      [deleteContact.rejected]: handleRejected,
    [editContact.pending]: handlePending,
    [editContact.rejected]: handleRejected,
    
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactsList = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactsList.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactsList = state.contactsList.filter(element => element.id !== action.payload.id);
      },
      [editContact.fulfilled](state, action) {
        const { id, name, number } = action.payload; 
      state.isLoading = false;
      state.error = null;
      state.contactsList = state.contactsList.map(element => {
        if (element.id === id) {
          element = { name, number }
        }
      });
    },
    
    }
})



export const contactsReducer = slice.reducer;





import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
  const response = await axios.get("/contacts");
  return response.data;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
 
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
  try {
    const response = await axios.post("/contacts", contact);
    return response.data;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
 
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }

});

export const editContact = createAsyncThunk("contacts/editContact", async ({id, contact}, thunkAPI) => {
  try {
    console.log(contact);
    const response = await axios.patch(`/contacts/${id}`, contact);
    return response.data;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }

});
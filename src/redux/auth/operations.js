import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setBearer = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearBearer = () => {
    axios.defaults.headers.common.Authorization = ``;
}


export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
  try {
      const response = await axios.post("/users/signup", user);
      setBearer(response.data.token);
      
  return response.data;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
 
});

export const logIn = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
      const response = await axios.post("/users/login", user);
      setBearer(response.data.token);
      return response.data;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
      await axios.post("/users/logout");
      clearBearer();
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) {
       return thunkAPI.rejectWithValue("No valid token");
    }
    setBearer(token);
  try {
  const response = await axios.get("/users/current");
  return response.data;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});



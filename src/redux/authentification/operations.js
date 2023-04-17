import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
   axios.defaults.headers.common.Authorization = '';
};

export const signUpUser = createAsyncThunk(
   'authentification/signup',
   async (credentials, thunkAPI) => {
      try {
         const response = await axios.post('/users/signup', credentials);
         setAuthHeader(response.data.token);
         console.log(response.data);
         return response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
      }
   }
);

export const logIn = createAsyncThunk('authentification/login', async (credentials, thunkAPI) => {
   try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      console.log(response.data);
      return response.data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

export const logOut = createAsyncThunk('authentification/logout', async (_, thunkAPI) => {
   try {
      await axios.post('/users/logout');
      clearAuthHeader();
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

export const refreshUser = createAsyncThunk('authentification/refresh', async (_, thunkAPI) => {
   const state = thunkAPI.getState();
   const persistedToken = state.auth.token;

   if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
   }
   try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

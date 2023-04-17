import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
   try {
      const response = await axios.get('/contacts');
      const data = response.data;
      console.log(data);
      return data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
   try {
      console.log(contact);
      const response = await axios.post('/contacts', contact);
      const data = response.data;
      console.log(data);
      return data;
   } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
   }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
   try {
      const response = await axios.delete(`/contacts/${id}`);
      const data = response.data;
      console.log(data);
      return data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

export const updateContact = createAsyncThunk('contacts/updateContact', async (id, thunkAPI) => {
   try {
      const response = await axios.patch(`/contacts/${id}`);
      const data = response.data;
      console.log(data);
      return data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

// export async function getContact() {
//    try {
//       const response = await axios.get('/contacts');
//       const data = response.data;
//       console.log(data);
//       return data;
//    } catch (error) {
//       console.error(error);
//    }
// }

// export async function addContact() {
//    try {
//       const response = await axios.post(BASE_URL, { name: 'name', contact: 'contact' });
//       console.log(response);
//    } catch (error) {
//       console.error(error);
//    }
// }

// export async function deleteContact() {
//    try {
//       const response = await axios.delete(BASE_URL, { name: 'name', contact: 'contact' });
//       console.log(response);
//    } catch (error) {
//       console.error(error);
//    }
// }

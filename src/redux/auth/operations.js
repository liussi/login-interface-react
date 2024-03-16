import { createAsyncThunk } from '@reduxjs/toolkit';
import { forgotPassword, login, setNewPassword } from '../../api/authApi';
import axios from 'axios';

export const setToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const createAccessToken = createAsyncThunk(
  'auth/createAccessToken',
  async (accessId) => {
    const url = 'https://auth-qa.qencode.com/v1/auth/access-token';
    const body = { access_id: accessId };

    const response = await axios.post(url, body);
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (body, { rejectWithValue }) => {
    try {
      const data = await login(body);
      setToken.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const resetPasswordUser = createAsyncThunk(
  'auth/resetPasswordUser',
  async ({ email }, { rejectWithValue }) => {
    try {
      const data = await forgotPassword(email);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);


export const setNewPasswordUser = createAsyncThunk(
  'auth/setNewPasswordUser',
  async ({ token, secret, password, password_confirm }, { rejectWithValue }) => {
     try {
      const data = await setNewPassword( token, secret, password, password_confirm );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

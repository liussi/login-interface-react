import { createAccessToken, loginUser, resetPasswordUser, setNewPassword, setNewPasswordUser } from './operations';
import { createSlice } from '@reduxjs/toolkit';

export const authSlise = createSlice({
  name: 'auth',
  initialState: {
    user: { email: null, password: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error:null,
  },
  extraReducers: builder => {
    builder
      .addCase(createAccessToken.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createAccessToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(createAccessToken.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
     state.token = action.payload.access_token; 
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(resetPasswordUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(resetPasswordUser.fulfilled, state => {
        state.isLoading = false;
        // Додайте сюди дії, які потрібно виконати після успішного скидання пароля
      })
      .addCase(resetPasswordUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(setNewPasswordUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(setNewPasswordUser.fulfilled, state => {
        state.isLoading = false;
        // Додайте сюди дії, які потрібно виконати після успішного встановлення нового пароля
      })
      .addCase(setNewPasswordUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});


export const authReduser = authSlise.reducer;
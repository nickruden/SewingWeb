import { checkAuth, login, logout, registration } from './user.actions'
import { createSlice } from '@reduxjs/toolkit'

import { IInitialState } from './user.interface'

import { getLocalStorage } from '@/core/utils/localstorage.config'

// начальное значение состояния состояние нашего slice
// забираем ил localstorage инфу
const initialState: IInitialState = {
  user: getLocalStorage('user'),
  isLoading: false,
  error: undefined
}

// создаем slice
// ?
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      // в процессе
      .addCase(registration.pending, state => {
        state.isLoading = true
      })

      // исполнено
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.error
      })

      // отклонено
      .addCase(registration.rejected, (state) => {
        state.isLoading = false
      })

      //=======================================================

      // в процессе
      .addCase(login.pending, state => {
        state.isLoading = true
      })

      // исполнено
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
      })

      // отклонено
      .addCase(login.rejected, (state, action ) => {
        state.isLoading = false
        state.error = action.payload as string
      })

      //=======================================================
      .addCase(logout.fulfilled, state => {
        state.isLoading = false
        state.user = null
      })

      //=======================================================
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.user = payload.user
      })
  }
})

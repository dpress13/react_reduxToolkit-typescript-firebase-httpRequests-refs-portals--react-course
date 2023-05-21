import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../store/index';

export type uiState = {
    cartIsVisible: boolean;
    notification: {
      status: string
      title: string
      message: string
    } | null
};

const initialState: uiState = { cartIsVisible: false, notification: null }

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // Show / hide cart when header button clicked
    // Used on CartButton
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    // Show updating, success & error messages when fetching / sending cart data to firebase
    // Used on cartActionCreators
    showNotification(state, action) {
      const payload = action.payload;
      state.notification = {
        status: payload.status,
        title: payload.title,
        message: payload.message,
      };
    },
    // Used on cartActionCreators
    hideNotification(state) {
      state.notification = null;
    }
  },
});

export const uiActions = uiSlice.actions;

export const cartIsVisible = (state: RootState) => state.ui.cartIsVisible;
export const notification = (state: RootState) => state.ui.notification;

export default uiSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notification: null },
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

export default uiSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cartSlice';
import uiReducer from './uiSlice';

const store = configureStore({
  reducer: { cart: cartReducer, ui: uiReducer },
});

// State & dispatch store config for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

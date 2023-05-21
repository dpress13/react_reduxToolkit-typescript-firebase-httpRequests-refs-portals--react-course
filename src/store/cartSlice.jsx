import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Replace / update cart when fetched from database
    // Used on cartActionCreators
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    // Used on CartItem, ProductItem
    addItem(state, action) {
      const addedItem = action.payload;
      const existingItem = state.items.find(item => item.id === addedItem.id);
      state.totalQuantity++;
      // Show 'success' message only when item is successfully added to database and not on refresh
      state.changed = true;
      // Item exists in cart => update item's quantity & total item cost
      if (existingItem) {
        existingItem.quantity++;
        state.changed = true;
        existingItem.itemTotalPrice = existingItem.itemTotalPrice + existingItem.price;
      } else {
        // Item doesn't exist in cart => push new item object to items array
        state.items.push({
          id: addedItem.id,
          name: addedItem.name,
          price: addedItem.price,
          quantity: 1,
          itemTotalPrice: addedItem.price,
        });
      }
    },
    // Used on CartItem
    removeItem(state, action) {
      const removedItem = action.payload;
      const existingItem = state.items.find(item => item.id === removedItem.id);
      state.totalQuantity--;
      // Remove item in with a quantity of 1
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== removedItem.id);
      } else {
        // Decrement an item's quantity if quantity > 1
        existingItem.quantity--;
        existingItem.itemTotalPrice = existingItem.itemTotalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

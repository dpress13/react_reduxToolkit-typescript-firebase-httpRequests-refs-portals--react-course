import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Notification from './components/UI/Notification';
import Products from './components/Shop/Products';

import { fetchCartData, sendCartData } from './store/cartActionCreators';

// Positioned outside component function to only run when file first parsed - for cart state retention
let initialPageload = true;

export default function App() {
  const cart = useSelector(state => state.cart);
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const notification = useSelector(state => state.ui.notification);
  const dispatch = useDispatch();

  // Fetch cart from database on initial load (App.js & useEffect dependency both render 1x)
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  // Send cart data after the inital load when cart changes
  useEffect(() => {
    // Don't send cart data on refresh after App's first load so current cart isn't overwritten
    if (initialPageload) {
      initialPageload = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}
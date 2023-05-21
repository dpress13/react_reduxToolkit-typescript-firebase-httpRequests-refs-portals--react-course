import { uiActions } from './uiSlice';
import { cartActions } from './cartSlice';

// Used on App.js
export const fetchCartData = () => {
  return async dispatch => {
    
    const fetchData = async () => {
      const response = await fetch('https://react-udemy-19-adv-redux--cart-default-rtdb.firebaseio.com/cart.json' );
      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({
          // Replace with items in cart or add empty array if no cart items exist
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed! Database error message: ' + error.message + '.',
        })
      );
    }
  };
};
// Used on App.js
export const sendCartData = cart => {
  return async dispatch => {
    
    // Thunk that displays "Updating..." notification until sendRequest completes
    dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Updating...',
        message: 'Updating cart!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch('https://react-udemy-19-adv-redux--cart-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };
    
    try {
      await sendRequest();
      dispatch(uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Cart has been updated!',
        })
      );
      setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 3500)
    } catch (error) {
      dispatch(uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed! Database error message: ' + error.message + '.',
        })
      );
    }
  };
};

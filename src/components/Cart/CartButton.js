import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../store/uiSlice';

import style from './CartButton.module.css';

// Used on MainHeader
export default function CartButton() {
  const cartItems = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={style.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={style.badge}>{cartItems}</span>
    </button>
  );
};
import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cartSlice';

import style from './CartItem.module.css';

// Used on Cart
export default function CartItem({ item }) {
  const { id, name, quantity, itemTotalPrice, price } = item;
  const dispatch = useDispatch();
  
  const addItemHandler = () => {
    dispatch(cartActions.addItem({id}));
  };
  
  const removeItemHandler = () => {
    dispatch(cartActions.removeItem({id}));
  };
  
  return (
    <li className={style.item}>
      <header>
        <h3>{name}</h3>
        <div className={style.price}>
          ${itemTotalPrice.toFixed(2)}
          <span className={style['item-price']}> (${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={style.details}>
        <div className={style.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={style.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};
import { useAppSelector } from '../../hooks/reduxHooks';

import Card from '../UI/Card';
import CartItem from './CartItem';

import style from './Cart.module.css'

// Used on App
export default function Cart() {
  const cartItemsSelector = useAppSelector(state => state.cart.items);

  const cartItems = (
    <ul>
      {cartItemsSelector.map((item) => (
        <CartItem
        key={item.id}
        items={item}
        />
        ))}
      </ul>
  );

  return (
    <Card className={style.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems}
    </Card>
  );
};
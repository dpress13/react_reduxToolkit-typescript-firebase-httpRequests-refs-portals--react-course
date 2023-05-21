import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import { cartActions } from '../../store/cartSlice';

import style from './ProductItem.module.css';

// Used on Products
export default function ProductItem({ description, id, name, price }) {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addItem({ id, name, price }));
  };

  return (
    <li className={style.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={style.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={style.action}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
}
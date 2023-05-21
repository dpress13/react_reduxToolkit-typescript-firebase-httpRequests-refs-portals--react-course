import ProductItem from './ProductItem';

import style from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: '1',
    name: 'Product 1',
    description: 'This is a first product - amazing!',
    price: 6,
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'This is a second product - amazing!',
    price: 10,
  },
  {
    id: '3',
    name: 'Product 3',
    description: 'This is a third product - amazing!',
    price: 20,
  }
];

// Used on App
export default function Products() {
  return (
    <section className={style.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
            id={product.id}
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
}
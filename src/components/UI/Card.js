import style from './Card.module.css';

// Used on Cart, ProductItem
export default function Card({ children, className }) {
  return (
    <section className={`${style.card} ${className ? className : ''}`}>
      {children}
    </section>
  );
};
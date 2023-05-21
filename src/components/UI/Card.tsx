import { ReactNode } from 'react';

import style from './Card.module.css';

type Props = {
  children: ReactNode;
  className: string;
}
// Used on Cart, ProductItem
export default function Card({ children, className }: Props) {
  return (
    <section className={`${style.card} ${className ? className : ''}`}>
      {children}
    </section>
  );
};
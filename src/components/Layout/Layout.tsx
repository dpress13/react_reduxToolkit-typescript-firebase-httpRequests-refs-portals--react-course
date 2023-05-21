import { ReactNode } from 'react';
import MainHeader from './MainHeader';

type Props = {
  children: ReactNode
}
// Used on App
export default function Layout({ children }: Props) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

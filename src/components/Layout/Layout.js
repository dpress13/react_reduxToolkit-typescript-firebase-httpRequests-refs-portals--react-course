import MainHeader from './MainHeader';

// Used on App
export default function Layout({ children }) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

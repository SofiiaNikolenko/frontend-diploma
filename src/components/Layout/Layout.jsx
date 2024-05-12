import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorite</NavLink>
        </nav>
      </header>
      <main>
        {/* <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense> */}
      </main>
    </>
  );
};

export default Layout;
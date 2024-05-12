import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/publictrips">Public Trips</NavLink>
          <NavLink to="/favouritetrips">Favorite Trips</NavLink>
          <NavLink to="/user">User</NavLink>
          <NavLink to="/auth">Auth</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
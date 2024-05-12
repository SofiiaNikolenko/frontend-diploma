import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';

// const Home = lazy(() => import('../pages/Home'));
// const Catalog = lazy(() => import('../pages/Catalog'));
// const Favorite = lazy(() => import('../pages/Favorites'));

// <NavLink to="/">Home</NavLink>
// <NavLink to="/publictrips">Public Trips</NavLink>
// <NavLink to="/favouritetrips">Favorite Trips</NavLink>
// <NavLink to="/user">User</NavLink>
// <NavLink to="/auth">Auth</NavLink>

const Home = lazy(() => import('../pages/Home'));
const PublicTrips = lazy(() => import('../pages/PublicTrips'));
const FavoriteTrips = lazy(() => import('../pages/FavouriteTrips'));
const User = lazy(() => import('../pages/User'));
const Auth = lazy(() => import('../pages/Auth'));

export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >
    //   React homework template
    // </div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="publictrips" element={<PublicTrips />} />
        <Route path="favouritetrips" element={<FavoriteTrips />} />
        <Route path="user" element={<User />} />
        <Route path="auth" element={<Auth />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

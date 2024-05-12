import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';

const Home = lazy(() => import('../pages/Home'));
const PublicTrips = lazy(() => import('../pages/PublicTrips'));
const FavoriteTrips = lazy(() => import('../pages/FavouriteTrips'));
const User = lazy(() => import('../pages/User'));
const Auth = lazy(() => import('../pages/Auth'));

export const App = () => {
  return (
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

import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// const Home = lazy(() => import('../pages/Home'));
// const Catalog = lazy(() => import('../pages/Catalog'));
// const Favorite = lazy(() => import('../pages/Favorites'));

// const Home = lazy(() => import('../pages/Home'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Home />} />
    //     <Route path="catalog" element={<Catalog />} />
    //     <Route path="favorites" element={<Favorite />} />
    //     <Route path="*" element={<Home />} />
    //   </Route>
    // </Routes>
  );
};

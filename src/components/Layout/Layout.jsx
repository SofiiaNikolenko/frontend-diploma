import { NavLink, Outlet } from 'react-router-dom';
// import { useState } from 'react';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

import { Header, Container, Nav, NavList, NavListItem } from './Layout.style';

const Layout = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // // const history = useHistory();

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   setIsAuthenticated(false);
  //   // history.push('/login');
  // };
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <NavList>
              <NavListItem>
                <NavLink to="/">Home</NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink to="/publictrips">Public Trips</NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink to="/favouritetrips">Favorite Trips</NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink to="/user">User</NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink to="/login">Login</NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink to="/registration">Registration</NavLink>
              </NavListItem>
            </NavList>
          </Nav>
        </Container>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;

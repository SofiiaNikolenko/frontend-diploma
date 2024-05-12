import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

import {
  Header,
  Container,
  Nav,
  NavList,
  NavListItem,
  ListAuthentication,
  ListAuthenticationItem,
  ListAuthenticationLink,
  Signup,
} from './Layout.style';

const Layout = () => {
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
                <NavLink to="/auth">Auth</NavLink>
              </NavListItem>
            </NavList>
          </Nav>
          <ListAuthentication>
            <ListAuthenticationItem>
              <ListAuthenticationLink href="">
                Login
              </ListAuthenticationLink>
            </ListAuthenticationItem>
            <ListAuthenticationItem>
              <Signup href="">Sign up</Signup>
            </ListAuthenticationItem>
          </ListAuthentication>
        </Container>
      </Header>
      {/* <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/publictrips">Public Trips</NavLink>
          <NavLink to="/favouritetrips">Favorite Trips</NavLink>
          <NavLink to="/user">User</NavLink>
          <NavLink to="/auth">Auth</NavLink>
        </nav>
      </header> */}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;

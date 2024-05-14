import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

import { Header, Container, Nav, NavList, NavListItem } from './Layout.style';

const Layout = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };
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
              {/* <NavListItem>
                <NavLink to="/user">User</NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink to="/login">Login</NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink to="/registration">Registration</NavLink>
              </NavListItem> */}
              {isAuthenticated && (
                <>
                  <NavListItem>
                    <NavLink to="/user">User</NavLink>
                  </NavListItem>
                  <NavListItem>
                    <button onClick={handleLogout}>Logout</button>
                  </NavListItem>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <NavListItem>
                    <NavLink to="/login">Login</NavLink>
                  </NavListItem>
                  <NavListItem>
                    <NavLink to="/registration">Registration</NavLink>
                  </NavListItem>
                </>
              )}
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

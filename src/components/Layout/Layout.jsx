import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import Loader from 'components/Loader/Loader';

import {
  Header,
  Container,
  Nav,
  NavList,
  NavListItem,
  Button,
} from './Layout.style';

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
    const token = localStorage.getItem('token');

    axios
      .post('http://localhost:3000/users/logout', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/');
      })
      .catch(error => {
        console.error('There was an error!', error);
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/');
      });
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
              {isAuthenticated && (
                <>
                  <NavListItem>
                    <NavLink to="/user">User</NavLink>
                  </NavListItem>
                  <NavListItem>
                    <Button onClick={handleLogout}>Logout</Button>
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

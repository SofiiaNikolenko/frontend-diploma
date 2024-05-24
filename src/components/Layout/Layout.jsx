import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';

import {
  Header,
  Container,
  ContainerDiv,
  Nav,
  Button,
  Footer,
} from './Layout.style';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
        toast.success('Успішний вихід!');
        navigate('/');
      })
      .catch(error => {
        localStorage.removeItem('token');
        toast.error('Щось пішло не так під час виходу! Спробуйте ще раз.');
        setIsAuthenticated(false);
        navigate('/');
      });
  };

  const navStyle = {
    color: location.pathname === '/' ? 'white' : 'inherit',
  };

  return (
    <>
      <ToastContainer />
      <Header>
        <Container>
          <Nav>
            <ContainerDiv>
              <NavLink to="/" style={navStyle}>
                Головна
              </NavLink>
              <NavLink to="/publictrips" style={navStyle}>
                Стрічка
              </NavLink>
              <NavLink to="/populartrips" style={navStyle}>
                Популярні мандрівки
              </NavLink>
            </ContainerDiv>
            <ContainerDiv>
              {isAuthenticated && (
                <>
                  <NavLink to="/user" style={navStyle}>
                    Щоденник
                  </NavLink>
                  <Button onClick={handleLogout}>Вихід</Button>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <NavLink to="/login" style={navStyle}>
                    Авторизація
                  </NavLink>
                  <NavLink to="/registration" style={navStyle}>
                    Регістрація
                  </NavLink>
                </>
              )}
            </ContainerDiv>
          </Nav>
        </Container>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer> by Sofiia Nikolenko</Footer>
    </>
  );
};

export default Layout;

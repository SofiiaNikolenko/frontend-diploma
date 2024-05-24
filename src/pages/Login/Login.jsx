import LoginForm from 'components/Auth/LoginSections/LoginForm/LoginForm';
import SwipeableTextMobileStepper from '../../components/Auth/Swiper/Swiper';

import { Container, ContainerForm } from './Login.style';

const Login = () => {
  return (
    <Container>
      <ContainerForm>
        <SwipeableTextMobileStepper></SwipeableTextMobileStepper>
        <LoginForm></LoginForm>
      </ContainerForm>
    </Container>
  );
};

export default Login;

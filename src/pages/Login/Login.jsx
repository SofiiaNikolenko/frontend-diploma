import LoginForm from 'components/Auth/LoginSections/LoginForm/LoginForm';
import SwipeableTextMobileStepper from '../../components/Auth/Swiper/Swiper';

import { ContainerForm } from './Login.style';

const Login = () => {
  return (
      <ContainerForm>
        <SwipeableTextMobileStepper></SwipeableTextMobileStepper>
        <LoginForm></LoginForm>
      </ContainerForm>
  );
};

export default Login;

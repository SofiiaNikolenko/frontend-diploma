import RegistrationForm from 'components/Auth/RegistrationSections/RegistrationForm/RegistrationForm';
import SwipeableTextMobileStepper from '../../components/Auth/Swiper/Swiper';
import { ContainerForm } from './Registration.style';

const Registration = () => {
  return (
    <ContainerForm>
      <RegistrationForm></RegistrationForm>
      <SwipeableTextMobileStepper></SwipeableTextMobileStepper>
    </ContainerForm>
  );
};

export default Registration;

import RegistrationForm from "components/Auth/RegistrationSections/RegistrationForm/RegistrationForm";
import SwipeableTextMobileStepper from "../../components/Auth/Swiper/Swiper"
import { Container, ContainerForm } from './Registration.style';

const Registration = () => {
  return (
    <Container>
      <ContainerForm>
        <RegistrationForm></RegistrationForm>
        <SwipeableTextMobileStepper></SwipeableTextMobileStepper>
      </ContainerForm>
    </Container>
  );
};

export default Registration;


import RegistrationForm from "components/Auth/RegistrationSections/RegistrationForm/RegistrationForm";
import SwipeableTextMobileStepper from "../../components/Auth/Swiper/Swiper"
import { Container, ContainerForm } from './Registration.style';

const Registration = () => {
  return (
    <Container>
      <h2>
        Приєднуйся до дивовижного світу мандрівок! Створюй власні мандрівки або
        надихайся подорожами інших! Спробуй зараз!{' '}
      </h2>
      <ContainerForm>
        <RegistrationForm></RegistrationForm>
        <SwipeableTextMobileStepper></SwipeableTextMobileStepper>
      </ContainerForm>
    </Container>
  );
};

export default Registration;


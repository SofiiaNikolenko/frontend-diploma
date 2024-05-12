import {
  HeroSection,
  Container,
  TitleOne,
  TitleTwo,
  TitleThree,
} from './Hero.style';

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <TitleOne>Helping Others</TitleOne>
        <TitleTwo>LIVE & TRAVEL</TitleTwo>
        <TitleThree>Special offers to suit your plan</TitleThree>
      </Container>
    </HeroSection>
  );
};

export default Hero;

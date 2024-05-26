import styled from 'styled-components';
import HeroImg from '../img/Hero-img.png';

export const HeroSection = styled.section`
  color: rgba(255, 255, 255, 1);
  height: 100vh;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${HeroImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 40px;
  @media (max-width: 425px) {
    height: auto;
    min-height: 100vh;
  }
`;

export const Container = styled.div`
  font-weight: 700;
  padding: 120px 20px;
  max-width: 754px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 425px) {
    padding: 80px 20px;
  }
`;

export const TitleOne = styled.h2`
  font-family: 'RalewayRegular';
  font-size: 45px;
  line-height: 57px;
  margin-bottom: 4px;
  @media (max-width: 425px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const TitleTwo = styled.h1`
  font-family: 'RalewayRegular';
  font-size: 40px;
  line-height: 101px;
  margin-bottom: 16px;
  @media (max-width: 425px) {
    font-size: 20px;
    line-height: 40px;
  }
`;

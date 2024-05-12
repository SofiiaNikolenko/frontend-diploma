import styled from 'styled-components';

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('https://res.cloudinary.com/dfphjvlb1/image/upload/v1696926349/car/BuickEnclave2008.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const TitleHome = styled.h1`
  font-size: 36px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  z-index: 5;
`;

export const DescriptionHome = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: center;
  max-width: 600px;
  z-index: 5;
`;

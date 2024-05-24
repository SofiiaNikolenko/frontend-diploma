import styled from 'styled-components';

export const Header = styled.header`
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  color: black;
  @media (max-width: 426px) {
    font-size: 12px;
  }
`;

export const Container = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  max-width: 1262px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 426px) {
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
  }
`;

export const ContainerDiv = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 426px) {
    gap: 10px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.button`
  color: rgb(141, 211, 187);
  @media (max-width: 426px) {
    padding: 6px 12px;
  }
`;

export const Footer = styled.footer`
  background-color: rgb(141, 211, 187);
  color: rgb(255, 255, 255);
  padding: 10px;
  text-align: center;
  margin-top: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

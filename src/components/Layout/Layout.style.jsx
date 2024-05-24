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
`;

export const Container = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;

  max-width: 1262px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const ContainerDiv = styled.div`
  display: flex;
  gap: 32px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const ListAuthentication = styled.ul`
  display: flex;
  gap: 32px;
`;

export const Button = styled.button`
  color: rgb(141, 211, 187);
`;

export const Footer = styled.footer`
  background-color: rgb(141, 211, 187);
  color: rgb(255, 255, 255);
  padding: 10px;
  text-align: center;
  margin-top: 20px;
`;

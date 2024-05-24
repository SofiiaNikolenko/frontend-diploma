import styled from 'styled-components';

export const ContainerForm = styled.div`
  width: 1262px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 70px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 426px) {
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

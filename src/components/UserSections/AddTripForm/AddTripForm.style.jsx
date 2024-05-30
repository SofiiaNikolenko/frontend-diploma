import styled from 'styled-components';

export const FormDiv = styled.div`
  display: flex;
  gap: 35px;
  @media (max-width: 426px) {
    flex-direction: column;
    gap: 25px;
  }
`;

export const Form = styled.form`
  max-width: 600px;
  padding: 15px;
  border: 1px solid #8dd3bb;
  border-radius: 5px;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 4px 16px 0px rgba(17, 34, 17, 0.05);
`;

export const CategoriesDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid #8dd3bb;
  border-radius: 5px;
  margin-bottom: 10px;
  gap: 10px;
`;

export const PublicCheckboxDiv = styled.div`
  display: flex;
  gap: 5px;
`;

export const TodoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 7px;
`;

export const ChangeDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const HintDiv = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #8dd3bb;
  border-radius: 5px;
  box-shadow: 0px 4px 16px 0px rgba(17, 34, 17, 0.05);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HintDivItem = styled.div`
  padding: 15px;
  border: 1px solid #8dd3bb;
  border-radius: 5px;
  box-shadow: 0px 4px 16px 0px rgba(17, 34, 17, 0.05);
`;

export const HintSpan = styled.span`
  font-weight: bold;
`;



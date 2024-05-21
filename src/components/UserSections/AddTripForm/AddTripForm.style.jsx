import styled from 'styled-components';

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

// export const FormWrapper = styled.div`
//   max-width: 600px;
//   margin: 0 auto;
// `;

// // Form Title
// export const FormTitle = styled.h1`
//   text-align: center;
//   margin-bottom: 20px;
//   color: #333;
// `;

// // Form Element
// export const FormElement = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// // Label
// export const Label = styled.label`
//   margin-bottom: 5px;
//   font-weight: bold;
//   color: #555;
// `;

// // Input
// export const Input = styled.input`
//   padding: 10px;
//   margin-bottom: 15px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 16px;
// `;

// // Checkbox
// export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
//   margin-right: 10px;
// `;

// // Button
// export const Button = styled.button`
//   padding: 10px 15px;
//   margin-top: 10px;
//   border: none;
//   border-radius: 4px;
//   background-color: #007bff;
//   color: #fff;
//   font-size: 16px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// // Category Container
// export const CategoryContainer = styled.div`
//   margin-bottom: 20px;
//   padding: 15px;
//   background-color: #fff;
//   border: 1px solid #e0e0e0;
//   border-radius: 8px;
// `;

// // Todo Container
// export const TodoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 10px;
// `;

// // Todo Input
// export const TodoInput = styled(Input)`
//   margin-bottom: 5px;
// `;

// // Add/Delete Buttons
// export const SmallButton = styled(Button)`
//   padding: 5px 10px;
//   font-size: 14px;
//   margin-top: 5px;
//   margin-right: 5px;
//   background-color: #28a745;

//   &:hover {
//     background-color: #218838;
//   }

//   &:nth-of-type(2) {
//     background-color: #dc3545;

//     &:hover {
//       background-color: #c82333;
//     }
//   }
// `;

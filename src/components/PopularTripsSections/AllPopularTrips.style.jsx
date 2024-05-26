import styled from 'styled-components';

export const Cards = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 16px;

  @media (max-width: 426px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const TripDescription = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 12px;

  @media (max-width: 425px) {
    font-size: 12px;
  }
`;

export const Category = styled.h3`
  margin-bottom: 4px;

  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

export const CategoryName = styled.h4`
  color: #555;
  margin-bottom: 2px;

  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

export const TodoList = styled.ul`
  list-style-type: disc;
  margin-bottom: 4px;
  margin-left: 15px;

  @media (max-width: 425px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;

export const TodoItem = styled.li`
  color: #777;

  @media (max-width: 425px) {
    font-size: 12px;
  }
`;

export const PhotoList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px;

  @media (max-width: 425px) {
    gap: 2px;
  }
`;

export const Photo = styled.li`
  width: 150px;
`;

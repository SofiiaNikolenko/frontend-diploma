import styled from 'styled-components';

export const TripDescription = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 5px;
  margin-bottom: 16px;
`;

export const Category = styled.h3`
  margin-bottom: 6px;
`;

export const CategoryName = styled.h4`
  color: #555;
  margin-bottom: 3px;
`;

export const TodoList = styled.ul`
  list-style-type: disc;
  margin-bottom: 6px;
  margin-left: 15px;
`;

export const TodoItem = styled.li`
  color: #777;
`;

export const PhotoList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Photo = styled.li`
  width: 150px;
`;

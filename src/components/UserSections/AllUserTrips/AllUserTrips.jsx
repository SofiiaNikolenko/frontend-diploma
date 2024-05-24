/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useState, useEffect } from 'react';
import { Card, Col } from 'antd';
import {
  Cards,
  TripDescription,
  Category,
  CategoryName,
  TodoList,
  TodoItem,
  PhotoList,
  Photo,
} from './AllUserTrips.style';

const AllUserTrips = () => {
  const [trips, setTrips] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://localhost:3000/api/trips', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => setTrips(data))
      .catch(error => console.error('Error fetching trips:', error));
  }, [token]);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
      <Cards>
        {trips.map(trip => (
          <Col span={8} key={trip._id}>
            <Card
              style={{ marginBottom: '15px', width: '390px' }}
              title={trip.title}
              bordered={false}
              headStyle={{
                backgroundColor: getRandomColor(),
                color: '#fafbfc',
              }}
            >
              <TripDescription>{trip.description}</TripDescription>
              <Category>Категорії:</Category>
              <ul>
                {trip.categories.map((category, index) => (
                  <li key={index}>
                    <CategoryName>{category.nameCategory}</CategoryName>
                    <TodoList>
                      {category.todoList.map((todo, index) => (
                        <TodoItem key={index}>{todo.todo}</TodoItem>
                      ))}
                    </TodoList>
                  </li>
                ))}
              </ul>
              <p>Публачна мандрівка: {trip.isPublic ? 'Так' : 'Ні'}</p>
              {trip.photos.length > 0 && (
                <div>
                  <h3>Фотографії:</h3>
                  <PhotoList>
                    {trip.photos.map((photo, index) => (
                      <Photo key={index}>
                        <img src={photo.cdnUrl} alt={`Photo ${index + 1}`} />
                      </Photo>
                    ))}
                  </PhotoList>
                </div>
              )}
            </Card>
          </Col>
        ))}
      </Cards>
    </>
  );
};

export default AllUserTrips;

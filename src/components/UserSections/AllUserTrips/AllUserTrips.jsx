/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'antd';
import {
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

  return (
    <>
      <Row gutter={16}>
        {trips.map(trip => (
          <Col span={8} key={trip._id}>
            <Card
              style={{ marginBottom: '15px' }}
              title={trip.title}
              bordered={false}
            >
              <TripDescription>{trip.description}</TripDescription>
              <Category>Categories:</Category>
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
              <p>Public: {trip.isPublic ? 'Yes' : 'No'}</p>
              {trip.photos.length > 0 && (
                <div>
                  <h3>Photos:</h3>
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
      </Row>
    </>
  );
};

export default AllUserTrips;

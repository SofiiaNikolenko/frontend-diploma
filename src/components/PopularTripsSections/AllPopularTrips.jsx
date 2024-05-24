/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col} from 'antd';
import Modal from '../PublicTripsSections/Modal/Modal';

import {
  Cards,
  TripDescription,
  Category,
  CategoryName,
  TodoList,
  TodoItem,
  PhotoList,
  Photo,
} from './AllPopularTrips.style';

const AllPopularTrips = () => {
  const [popularTrips, setPopularTrips] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchPopularTrips = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/trips/trips-with-likes'
        );
        setPopularTrips(response.data.trips);
      } catch (error) {
        console.error('Error fetching popular trips:', error);
      }
    };

    fetchPopularTrips();
  }, []);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handlePhotoClick = photo => {
    setSelectedPhoto(photo);
    setOpen(true);
  };

  return (
    <>
      <Cards>
        {popularTrips.map(trip => (
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
              <div>
                <Category>Категорії:</Category>
                <ul>
                  {trip.categories.map(category => (
                    <li key={category._id}>
                      <CategoryName>{category.nameCategory}</CategoryName>
                      <TodoList>
                        {category.todoList.map(todo => (
                          <TodoItem key={todo._id}>{todo.todo}</TodoItem>
                        ))}
                      </TodoList>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Фотографії:</h3>
                <PhotoList>
                  {trip.photos.map(photo => (
                    <Photo key={photo.uuid}>
                      <img
                        src={photo.cdnUrl}
                        alt={`Trip photo`}
                        onClick={() => handlePhotoClick(photo.cdnUrl)}
                        style={{
                          width: '150px',
                          cursor: 'pointer',
                          boxShadow: '7px 11px 10px 1px rgba(223, 223, 223, 1)',
                        }}
                      />
                    </Photo>
                  ))}
                </PhotoList>
              </div>
            </Card>
          </Col>
        ))}
      </Cards>
      {selectedPhoto && (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          photo={selectedPhoto}
        />
      )}
    </>
  );
};

export default AllPopularTrips;

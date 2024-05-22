/* eslint-disable jsx-a11y/img-redundant-alt */

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Row, Input, Select } from 'antd';
import Modal from './Modal/Modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  TripDescription,
  Category,
  CategoryName,
  TodoList,
  TodoItem,
  PhotoList,
  Photo,
} from './AllPublicTrips.style';

const { Option } = Select;

const AllPublicTrips = () => {
  const [trips, setTrips] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/trips/allpublic'
        );
        setTrips(response.data.trips);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrips();
  }, []);

  const handleLike = async tripId => {
    try {
      await axios.patch(`http://localhost:3000/api/trips/${tripId}/likes`);
    } catch (error) {
      console.error('Error liking trip:', error);
    }
  };

  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = value => {
    setSelectedCategory(value);
  };

  const handlePhotoClick = photo => {
    setSelectedPhoto(photo);
    setOpen(true);
  };

  const filteredTrips = trips.filter(trip => {
    const matchesSearchQuery = trip.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory
      ? trip.categories.some(
          category => category.nameCategory === selectedCategory
        )
      : true;
    return matchesSearchQuery && matchesCategory;
  });

  useEffect(() => {
    if (searchQuery || selectedCategory) {
      if (filteredTrips.length === 0) {
        toast.info('Нажаль не знайдено жодної мандрівки');
      }
    }
  }, [filteredTrips.length, searchQuery, selectedCategory]);

  const uniqueCategories = [
    ...new Set(
      trips.flatMap(trip =>
        trip.categories.map(category => category.nameCategory)
      )
    ),
  ];

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      <ToastContainer />
      <Input
        placeholder="Пошук мандрівки"
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: '20px' }}
      />
      <Select
        placeholder="Фільтр за категоріями"
        style={{ width: '200px', marginBottom: '20px' }}
        onChange={handleCategoryChange}
        allowClear
      >
        {uniqueCategories.map(category => (
          <Option key={category} value={category}>
            {category}
          </Option>
        ))}
      </Select>
      <Row gutter={[16, 16]}>
        {filteredTrips.map(trip => (
          <Col span={8} key={trip._id}>
            <Card
              style={{ marginBottom: '15px' }}
              title={trip.title}
              bordered={false}
              headStyle={{
                backgroundColor: getRandomColor(),
                color: '#fafbfc',
              }}
              actions={[
                <button key="like" onClick={() => handleLike(trip._id)}>
                  Like
                </button>,
              ]}
            >
              <TripDescription>{trip.description}</TripDescription>
              <Category>Categories:</Category>
              {trip.categories
                .filter(category => category.publicList)
                .map(category => (
                  <div key={category._id}>
                    <CategoryName>{category.nameCategory}</CategoryName>
                    <TodoList>
                      {category.todoList.map(todo => (
                        <TodoItem key={todo._id}>{todo.todo}</TodoItem>
                      ))}
                    </TodoList>
                  </div>
                ))}
              <div>
                <h3>Photos:</h3>
                <PhotoList>
                  {trip.photos.map((photo, index) => (
                    <Photo key={index}>
                      <img
                        src={photo.cdnUrl}
                        alt={`Photo ${index + 1}`}
                        onClick={() => handlePhotoClick(photo.cdnUrl)}
                        style={{
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
      </Row>
      {selectedPhoto && (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          photo={selectedPhoto}
        />
      )}
    </div>
  );
};

export default AllPublicTrips;

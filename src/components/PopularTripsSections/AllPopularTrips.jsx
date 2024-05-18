/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from 'react';
import axios from 'axios';

const AllPopularTrips = () => {
  const [popularTrips, setPopularTrips] = useState([]);

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

  return (
    <div>
      <h2>Popular Trips</h2>
      {popularTrips.map(trip => (
        <div key={trip._id}>
          <h3>{trip.title}</h3>
          <p>{trip.description}</p>
          {/* <p>Likes: {trip.likes}</p> */}
          <div>
            <h4>Categories:</h4>
            <ul>
              {trip.categories.map(category => (
                <li key={category._id}>
                  <h5>{category.nameCategory}</h5>
                  <ul>
                    {category.todoList.map(todo => (
                      <li key={todo._id}>{todo.todo}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Photos:</h4>
            <div>
              {trip.photos.map(photo => (
                <img
                  key={photo.uuid}
                  src={photo.cdnUrl}
                  alt={`Trip photo`}
                  style={{ width: '200px', height: 'auto' }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPopularTrips;

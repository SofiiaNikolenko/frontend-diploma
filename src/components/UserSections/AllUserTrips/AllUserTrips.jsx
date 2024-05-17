import React, { useState, useEffect } from 'react';

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
      <h1>All User Trips</h1>
      <ul>
        {trips.map(trip => (
          <li key={trip._id}>
            <h2>{trip.title}</h2>
            <p>{trip.description}</p>
            <h3>Categories:</h3>
            <ul>
              {trip.categories.map((category, index) => (
                <li key={index}>
                  <h4>{category.nameCategory}</h4>
                  <ul>
                    {category.todoList.map((todo, index) => (
                      <li key={index}>{todo.todo}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <p>Public: {trip.isPublic ? 'Yes' : 'No'}</p>
            {trip.photos.length > 0 && (
              <div>
                <h3>Photos:</h3>
                <ul>
                  {trip.photos.map((photo, index) => (
                    <li key={index}>
                      <img src={photo} alt={`Photo ${index + 1}`} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllUserTrips;

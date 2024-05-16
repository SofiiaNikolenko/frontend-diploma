// import React, { useEffect, useState } from 'react';

// const AllPublicTrips = () => {
//   const apiUrl = 'http://localhost:3000/api/trips/allpublic';
//   const [trips, setTrips] = useState([]);
//   const [filteredCategories, setFilteredCategories] = useState([]);

//   useEffect(() => {
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => {
//         const allTrips = data.trips;
//         setTrips(allTrips);

//         const categories = allTrips.reduce((acc, trip) => {
//           trip.categories.forEach(category => {
//             if (category.publicList) {
//               acc.push(category);
//             }
//           });
//           return acc;
//         }, []);
//         setFilteredCategories(categories);
//       })
//       .catch(error => {
//         console.error('Виникла помилка:', error);
//       });
//   }, []);

//   return (
//     <>
//       <h1>All Public Trips</h1>
//       <div>
//         <h2>Усі подорожі:</h2>
//         <ul>
//           {trips.map(trip => (
//             <li key={trip.id}>{trip.name}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h2>Категорії з publicList = true:</h2>
//         <ul>
//           {filteredCategories.map(category => (
//             <li key={category.id}>{category.name}</li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default AllPublicTrips;

import { useState, useEffect } from 'react';
import axios from 'axios';

const AllPublicTrips = () => {
  const [trips, setTrips] = useState([]);

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

  return (
    <div>
      {trips.map(trip => (
        <div key={trip._id}>
          <h3>{trip.title}</h3>
          <p>{trip.description}</p>
          <div>
            <h4>Categories:</h4>
            {trip.categories
              .filter(category => category.publicList)
              .map(category => (
                <div key={category._id}>
                  <h5>{category.nameCategory}</h5>
                  <ul>
                    {category.todoList.map(todo => (
                      <li key={todo._id}>{todo.todo}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPublicTrips;

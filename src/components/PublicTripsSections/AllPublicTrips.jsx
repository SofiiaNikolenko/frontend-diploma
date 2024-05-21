/* eslint-disable jsx-a11y/img-redundant-alt */

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'antd';

import {
  TripDescription,
  Category,
  CategoryName,
  TodoList,
  TodoItem,
  PhotoList,
  Photo,
} from './AllPublicTrips.style';

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

  const handleLike = async tripId => {
    try {
      await axios.patch(`http://localhost:3000/api/trips/${tripId}/likes`);
    } catch (error) {
      console.error('Error liking trip:', error);
    }
  };

  return (
    <Row gutter={[16, 16]}>
      {trips.map(trip => (
        <Col span={8} key={trip._id}>
          <Card
            style={{ marginBottom: '15px' }}
            title={trip.title}
            bordered={false}
            headStyle={{ backgroundColor: '#8DD3BB', color: '#fafbfc' }}
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
                    <img src={photo.cdnUrl} alt={`Photo ${index + 1}`} />
                  </Photo>
                ))}
              </PhotoList>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AllPublicTrips;

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const AllPublicTrips = () => {
//   const [trips, setTrips] = useState([]);

//   useEffect(() => {
//     const fetchTrips = async () => {
//       try {
//         const response = await axios.get(
//           'http://localhost:3000/api/trips/allpublic'
//         );
//         setTrips(response.data.trips);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchTrips();
//   }, []);

//   const handleLike = async tripId => {
//     try {
//       await axios.patch(`http://localhost:3000/api/trips/${tripId}/likes`);
//     } catch (error) {
//       console.error('Error liking trip:', error);
//     }
//   };

//   return (
//     <div>
//       {trips.map(trip => (
//         <div key={trip._id}>
//           <h3>{trip.title}</h3>
//           <p>{trip.description}</p>
//           <div>
//             <h4>Categories:</h4>
//             {trip.categories
//               .filter(category => category.publicList)
//               .map(category => (
//                 <div key={category._id}>
//                   <h5>{category.nameCategory}</h5>
//                   <ul>
//                     {category.todoList.map(todo => (
//                       <li key={todo._id}>{todo.todo}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//           </div>
//           <div>
//             <h4>Photos:</h4>
//             <div>
//               {trip.photos.map((photo, index) => (
//                 <img
//                   key={index}
//                   src={photo.cdnUrl}
//                   alt={`Trip photo ${index + 1}`}
//                   style={{ width: '200px', height: 'auto' }}
//                 />
//               ))}
//             </div>
//           </div>
//           <button onClick={() => handleLike(trip._id)}>Like</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllPublicTrips;

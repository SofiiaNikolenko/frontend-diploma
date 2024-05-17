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
    // <div>
    //   {trips.map(trip => (
    //     <div key={trip._id}>
    //       <h3>{trip.title}</h3>
    //       <p>{trip.description}</p>
    //       <div>
    //         <h4>Categories:</h4>
    //         {trip.categories
    //           .filter(category => category.publicList)
    //           .map(category => (
    //             <div key={category._id}>
    //               <h5>{category.nameCategory}</h5>
    //               <ul>
    //                 {category.todoList.map(todo => (
    //                   <li key={todo._id}>{todo.todo}</li>
    //                 ))}
    //               </ul>
    //             </div>
    //           ))}
    //       </div>
    //       <div>
    //         <h4>Photos:</h4>
    //         <div>
    //           {trip.photos.map(photo => (
    //             <img
    //               key={photo}
    //               src={photo}
    //               alt="Trip Photo"
    //               style={{ width: '200px', height: 'auto' }}
    //             />
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
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
          <div>
            <h4>Photos:</h4>
            <div>
              {trip.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Trip photo ${index + 1}`}
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

export default AllPublicTrips;

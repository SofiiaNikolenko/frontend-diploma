/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from 'react';
import {
  deleteFile,
  deleteFiles,
  UploadcareSimpleAuthSchema,
} from '@uploadcare/rest-client';

import AddPhotos from '../AddTripForm/AddPhotos/AddPhotos';

const UpdateTrip = () => {
  const initialState = {
    title: '',
    description: '',
    categories: [
      {
        nameCategory: '',
        todoList: [
          {
            todo: '',
          },
        ],
        publicList: false,
      },
    ],
    isPublic: false,
    photos: [],
  };

  const [data, setData] = useState(initialState);
  const [cdnUrls, setCdnUrls] = useState([]);
  const [trips, setTrips] = useState([]);
  const [selectedTripId, setSelectedTripId] = useState(null);
  const [isTripSelected, setIsTripSelected] = useState(false);
  const [uploadcareSimpleAuthSchema, setUploadcareSimpleAuthSchema] =
    useState(null);

  // const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
  //   publicKey: "274c6cf9681b13936265",
  //   secretKey: "9cfba5a3ce13072e7ac2",
  // });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const url = 'http://localhost:3000/api/trips/keys';

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setUploadcareSimpleAuthSchema(
          new UploadcareSimpleAuthSchema({
            publicKey: data.publicKey,
            secretKey: data.secretKey,
          })
        );
      })
      .catch(error => {
        console.error('Error fetching keys:', error);
      });
  }, []);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('data'));

    if (savedData) {
      setData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const url = 'http://localhost:3000/api/trips';

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(responseData => {
        setTrips(responseData);
      })
      .catch(error => {
        console.error('Error fetching trips:', error);
      });
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;

    setData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategoryChange = (event, index) => {
    const { name, value } = event.target;

    setData(prevData => {
      const newCategories = [...prevData.categories];
      newCategories[index] = {
        ...newCategories[index],
        [name]: value,
      };

      return {
        ...prevData,
        categories: newCategories,
      };
    });
  };

  const handleTodoChange = (event, categoryIndex, todoIndex) => {
    const { value } = event.target;

    setData(prevData => {
      const newCategories = [...prevData.categories];
      const newTodoList = [...newCategories[categoryIndex].todoList];
      newTodoList[todoIndex] = {
        todo: value,
      };
      newCategories[categoryIndex] = {
        ...newCategories[categoryIndex],
        todoList: newTodoList,
      };

      return {
        ...prevData,
        categories: newCategories,
      };
    });
  };

  const handlePublicChange = event => {
    const { checked } = event.target;

    setData(prevData => ({
      ...prevData,
      isPublic: checked,
    }));
  };

  const handleCategoryPublicChange = (event, categoryIndex) => {
    const { checked } = event.target;

    setData(prevData => {
      const newCategories = [...prevData.categories];
      newCategories[categoryIndex] = {
        ...newCategories[categoryIndex],
        publicList: checked,
      };

      return {
        ...prevData,
        categories: newCategories,
      };
    });
  };

  const addCategory = () => {
    setData(prevData => ({
      ...prevData,
      categories: [
        ...prevData.categories,
        {
          nameCategory: '',
          todoList: [
            {
              todo: '',
            },
          ],
          publicList: false,
        },
      ],
    }));
  };

  const addTodo = categoryIndex => {
    const updatedCategories = [...data.categories];
    updatedCategories[categoryIndex].todoList.push({
      todo: '',
    });
    setData(prevData => ({
      ...prevData,
      categories: updatedCategories,
    }));
  };

  const deleteCategory = categoryIndex => {
    setData(prevData => {
      const newCategories = [...prevData.categories];
      newCategories.splice(categoryIndex, 1);

      return {
        ...prevData,
        categories: newCategories,
      };
    });
  };

  const deleteTodo = (categoryIndex, todoIndex) => {
    const updatedCategories = [...data.categories];
    updatedCategories[categoryIndex].todoList.splice(todoIndex, 1);
    setData(prevData => ({
      ...prevData,
      categories: updatedCategories,
    }));
  };

  const handleCdnUrlsChange = urls => {
    setCdnUrls(urls);
  };

  // const handlePhotoDelete = index => {
  //   const updatedPhotos = [...data.photos];
  //   updatedPhotos.splice(index, 1);
  //   setData(prevData => ({
  //     ...prevData,
  //     photos: updatedPhotos,
  //   }));
  // };
  const handlePhotoDelete = index => {
    const updatedPhotos = [...data.photos];
    const deletedPhoto = updatedPhotos.splice(index, 1)[0];

    // Видалення фото з Uploadcare за його UUID
    deleteFile(
      { uuid: deletedPhoto.uuid },
      { authSchema: uploadcareSimpleAuthSchema }
    )
      .then(() => {
        console.log('Photo successfully deleted from Uploadcare');
      })
      .catch(error => {
        console.error('Error deleting photo from Uploadcare:', error);
      });

    setData(prevData => ({
      ...prevData,
      photos: updatedPhotos,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const token = localStorage.getItem('token');
    const url = `http://localhost:3000/api/trips/${selectedTripId}`;

    const updatedPhotos = data.photos.map(photo => {
      const cdnUrl = cdnUrls.find(url => url === photo.cdnUrl);
      return cdnUrl
        ? { cdnUrl, uuid: photo.uuid }
        : { cdnUrl: photo.cdnUrl, uuid: photo.uuid };
    });

    cdnUrls.forEach(newPhoto => {
      if (!data.photos.find(photo => photo.cdnUrl === newPhoto.cdnUrl)) {
        updatedPhotos.push({ cdnUrl: newPhoto.cdnUrl, uuid: newPhoto.uuid });
      }
    });

    const updatedData = {
      ...data,
      categories: data.categories.map(category => ({
        nameCategory: category.nameCategory,
        todoList: category.todoList.map(todo => ({
          todo: todo.todo,
        })),
        publicList: category.publicList,
      })),
      photos: [...updatedPhotos],
    };

    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    })
      .then(response => response.json())
      .then(responseData => {
        console.log('Response:', responseData);
        setData(initialState);
        localStorage.removeItem('data');
        setCdnUrls([]);
        // window.location.reload();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleTripSelect = tripId => {
    const selectedTrip = trips.find(trip => trip._id === tripId);
    setData({
      title: selectedTrip.title,
      description: selectedTrip.description,
      categories: selectedTrip.categories.map(category => ({
        nameCategory: category.nameCategory,
        todoList: category.todoList.map(todo => ({
          todo: todo.todo,
        })),
        publicList: category.publicList,
      })),
      isPublic: selectedTrip.isPublic,
      photos: selectedTrip.photos.map(photo => ({
        cdnUrl: photo.cdnUrl,
        uuid: photo.uuid,
      })),
    });
    setCdnUrls(selectedTrip.photos.map(photo => photo.cdnUrl));
    setSelectedTripId(tripId);
    setIsTripSelected(true);
  };

  const handleDeleteTrip = () => {
    const token = localStorage.getItem('token');
    const url = `http://localhost:3000/api/trips/${selectedTripId}`;

    const photoUUIDs = data.photos.map(photo => photo.uuid);

    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(responseData => {
        console.log('Trip deleted:', responseData);
        setData(initialState);
        localStorage.removeItem('data');
        setCdnUrls([]);
        setIsTripSelected(false);
        setTrips(trips.filter(trip => trip._id !== selectedTripId));
      })
      .catch(error => {
        console.error('Error deleting trip:', error);
      });

    if (photoUUIDs.length > 0) {
      deleteFiles(
        { uuids: photoUUIDs },
        { authSchema: uploadcareSimpleAuthSchema }
      )
        .then(() => {
          console.log(
            `Photos successfully deleted from Uploadcare: ${photoUUIDs.join(
              ', '
            )}`
          );
        })
        .catch(error => {
          console.error('Error deleting photos from Uploadcare:', error);
        });
    }
  };

  return (
    <>
      <h1>Form</h1>

      <h2>Select Trip to Edit</h2>
      <ul>
        {trips.map(trip => (
          <li key={trip._id} onClick={() => handleTripSelect(trip._id)}>
            {trip.title}
          </li>
        ))}
      </ul>

      {isTripSelected && (
        <>
          <form onSubmit={handleSubmit}>
            {/* Title */}
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={data.title}
              onChange={handleChange}
            />

            {/* Description */}
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={data.description}
              onChange={handleChange}
            />

            {/* Categories */}
            <h2>Categories</h2>
            {data.categories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <label htmlFor={`category-${categoryIndex}`}>
                  Category Name
                </label>
                <input
                  type="text"
                  id={`category-${categoryIndex}`}
                  name="nameCategory"
                  value={category.nameCategory}
                  onChange={event => handleCategoryChange(event, categoryIndex)}
                />

                {/* Category Public */}
                <label htmlFor={`category-public-${categoryIndex}`}>
                  Public
                </label>
                <input
                  type="checkbox"
                  id={`category-public-${categoryIndex}`}
                  name="publicList"
                  checked={category.publicList}
                  onChange={event =>
                    handleCategoryPublicChange(event, categoryIndex)
                  }
                />

                {/* Todo List */}
                <h3>Todo List</h3>
                {category.todoList.map((todo, todoIndex) => (
                  <div key={todoIndex}>
                    <label htmlFor={`todo-${categoryIndex}-${todoIndex}`}>
                      Todo
                    </label>
                    <input
                      type="text"
                      id={`todo-${categoryIndex}-${todoIndex}`}
                      name="todo"
                      value={todo.todo}
                      onChange={event =>
                        handleTodoChange(event, categoryIndex, todoIndex)
                      }
                    />

                    {/* Delete Todo */}
                    <button
                      type="button"
                      onClick={() => deleteTodo(categoryIndex, todoIndex)}
                    >
                      Delete Todo
                    </button>
                  </div>
                ))}

                {/* Add Todo */}
                <button type="button" onClick={() => addTodo(categoryIndex)}>
                  Add Todo
                </button>

                {/* Delete Category */}
                <button
                  type="button"
                  onClick={() => deleteCategory(categoryIndex)}
                >
                  Delete Category
                </button>
              </div>
            ))}

            {/* Add Category */}
            <button type="button" onClick={addCategory}>
              Add Category
            </button>

            {/* Public */}
            <label htmlFor="isPublic">Public</label>
            <input
              type="checkbox"
              id="isPublic"
              name="isPublic"
              checked={data.isPublic}
              onChange={handlePublicChange}
            />

            <ul>
              {data.photos.map((photo, index) => (
                <li key={index}>
                  <img src={photo.cdnUrl} alt={`Trip photo ${index}`} />
                  <button onClick={() => handlePhotoDelete(index)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>

            <AddPhotos onCdnUrlsChange={handleCdnUrlsChange} />

            {/* Submit */}
            <button type="submit">Submit</button>
          </form>

          {/* Delete Trip */}
          <button type="button" onClick={handleDeleteTrip}>
            Delete Trip
          </button>
        </>
      )}
    </>
  );
};

export default UpdateTrip;

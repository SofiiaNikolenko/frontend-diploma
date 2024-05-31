/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from 'react';
import {
  deleteFile,
  deleteFiles,
  UploadcareSimpleAuthSchema,
} from '@uploadcare/rest-client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input, Checkbox, Button } from 'antd';
import ButtonSend from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import AddPhotos from '../AddTripForm/AddPhotos/AddPhotos';

import {
  UpdateDiv,
  Form,
  CategoriesDiv,
  PublicCheckboxDiv,
  TodoDiv,
  ChangeDiv,
  BottomDiv,
  ContainerImg,
} from './UpdateTrip.style';

const { TextArea } = Input;

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

  const handlePhotoDelete = index => {
    const updatedPhotos = [...data.photos];
    const deletedPhoto = updatedPhotos.splice(index, 1)[0];

    deleteFile(
      { uuid: deletedPhoto.uuid },
      { authSchema: uploadcareSimpleAuthSchema }
    );

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
        toast.success('Мадрівка успішно оновлена!');
        setData(initialState);
        localStorage.removeItem('data');
        setCdnUrls([]);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('Упс... Щось пішло не так!');
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
        toast.success('Мандрівка успішно видалена!');
        setData(initialState);
        localStorage.removeItem('data');
        setCdnUrls([]);
        setIsTripSelected(false);
        setTrips(trips.filter(trip => trip._id !== selectedTripId));
      })
      .catch(error => {
        console.error('Error deleting trip:', error);
        toast.error('Упс... Щось пішло не так!');
      });

    if (photoUUIDs.length > 0) {
      deleteFiles(
        { uuids: photoUUIDs },
        { authSchema: uploadcareSimpleAuthSchema }
      );
    }
  };

  return (
    <>
      <ToastContainer />
      <h2>Обери мандрівку для внесення зміни</h2>
      <UpdateDiv>
        <ul>
          {trips.map(trip => (
            <li key={trip._id} onClick={() => handleTripSelect(trip._id)}>
              {trip.title}
            </li>
          ))}
        </ul>

        {isTripSelected && (
          <>
            <Form onSubmit={handleSubmit}>
              {/* Title */}
              <label htmlFor="title">Назва</label>
              <Input
                type="text"
                id="title"
                name="title"
                value={data.title}
                onChange={handleChange}
              />

              {/* Description */}
              <label htmlFor="description">Опис</label>
              <TextArea
                type="text"
                id="description"
                name="description"
                value={data.description}
                onChange={handleChange}
              />

              {/* Categories */}
              <h4>Категорії</h4>
              {data.categories.map((category, categoryIndex) => (
                <CategoriesDiv key={categoryIndex}>
                  <label htmlFor={`category-${categoryIndex}`}>
                    Назва категорії
                  </label>
                  <TodoDiv>
                    <Input
                      type="text"
                      id={`category-${categoryIndex}`}
                      name="nameCategory"
                      value={category.nameCategory}
                      onChange={event =>
                        handleCategoryChange(event, categoryIndex)
                      }
                    />

                    {/* Category Public */}
                    <PublicCheckboxDiv>
                      <label htmlFor={`category-public-${categoryIndex}`}>
                        Публічна категорія?
                      </label>
                      <Checkbox
                        type="checkbox"
                        id={`category-public-${categoryIndex}`}
                        name="publicList"
                        checked={category.publicList}
                        onChange={event =>
                          handleCategoryPublicChange(event, categoryIndex)
                        }
                      />
                    </PublicCheckboxDiv>
                  </TodoDiv>

                  {/* Todo List */}
                  <h3>Нотатки</h3>
                  {category.todoList.map((todo, todoIndex) => (
                    <TodoDiv key={todoIndex}>
                      {/* <label htmlFor={`todo-${categoryIndex}-${todoIndex}`}>
                      Todo
                    </label> */}
                      <Input
                        type="text"
                        id={`todo-${categoryIndex}-${todoIndex}`}
                        name="todo"
                        value={todo.todo}
                        onChange={event =>
                          handleTodoChange(event, categoryIndex, todoIndex)
                        }
                      />

                      {/* Delete Todo */}
                      <Button
                        type="primary"
                        danger
                        style={{ backgroundColor: '#ED5E68' }}
                        onClick={() => deleteTodo(categoryIndex, todoIndex)}
                      >
                        Видалити нотатку
                      </Button>
                    </TodoDiv>
                  ))}
                  <ChangeDiv>
                    {/* Add Todo */}
                    <Button
                      type="primary"
                      style={{ backgroundColor: '#8DD3BB' }}
                      onClick={() => addTodo(categoryIndex)}
                    >
                      Додати нотатку
                    </Button>

                    {/* Delete Category */}
                    <Button
                      type="primary"
                      style={{ backgroundColor: '#ED5E68' }}
                      danger
                      onClick={() => deleteCategory(categoryIndex)}
                    >
                      Видалити категорію
                    </Button>
                  </ChangeDiv>
                </CategoriesDiv>
              ))}

              <BottomDiv>
                {/* Add Category */}
                <Button
                  type="primary"
                  style={{ backgroundColor: '#8DD3BB' }}
                  onClick={addCategory}
                >
                  Додати категорію
                </Button>

                {/* Public */}
                <PublicCheckboxDiv>
                  <label htmlFor="isPublic">Публічна мандрівка?</label>
                  <Checkbox
                    type="checkbox"
                    id="isPublic"
                    name="isPublic"
                    checked={data.isPublic}
                    onChange={handlePublicChange}
                  />
                </PublicCheckboxDiv>
              </BottomDiv>

              <AddPhotos onCdnUrlsChange={handleCdnUrlsChange} />

              <ContainerImg>
                {data.photos.map((photo, index) => (
                  <div key={index}>
                    <img
                      style={{ width: '150px' }}
                      src={photo.cdnUrl}
                      alt={`Trip photo ${index}`}
                    />
                    <Button
                      type="primary"
                      style={{ backgroundColor: '#ED5E68' }}
                      danger
                      onClick={() => handlePhotoDelete(index)}
                    >
                      Видалити
                    </Button>
                  </div>
                ))}
              </ContainerImg>

              {/* Submit */}
              <ButtonSend
                style={{
                  marginTop: '10px',
                  color: '#8DD3BB',
                  borderColor: '#8DD3BB',
                }}
                variant="outlined"
                startIcon={<SendIcon />}
                type="submit"
              >
                Відправити
              </ButtonSend>

              {/* Delete Trip */}
              <Button
                type="primary"
                style={{ backgroundColor: '#ED5E68' }}
                danger
                onClick={handleDeleteTrip}
              >
                Видалити мандрівку
              </Button>
            </Form>
          </>
        )}
      </UpdateDiv>
    </>
  );
};

export default UpdateTrip;

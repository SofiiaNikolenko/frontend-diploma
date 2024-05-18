import { useState, useEffect } from 'react';
import axios from 'axios';

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
  };

  const [data, setData] = useState(initialState);
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/trips/allpublic',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTrips(response.data.trips);
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };

    fetchTrips();
  }, [token]);

  const handleTripSelect = trip => {
    setSelectedTrip(trip);
    setData({
      title: trip.title,
      description: trip.description,
      categories: trip.categories,
      isPublic: trip.isPublic,
    });
  };

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
      newTodoList[todoIndex] = { todo: value };
      newCategories[categoryIndex] = {
        ...newCategories[categoryIndex],
        todoList: newTodoList,
      };
      return { ...prevData, categories: newCategories };
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
      return { ...prevData, categories: newCategories };
    });
  };

  const addCategory = () => {
    setData(prevData => ({
      ...prevData,
      categories: [
        ...prevData.categories,
        {
          nameCategory: '',
          todoList: [{ todo: '' }],
          publicList: false,
        },
      ],
    }));
  };

  const addTodo = categoryIndex => {
    const updatedCategories = [...data.categories];
    updatedCategories[categoryIndex].todoList.push({ todo: '' });
    setData(prevData => ({ ...prevData, categories: updatedCategories }));
  };

  const deleteCategory = categoryIndex => {
    setData(prevData => {
      const newCategories = [...prevData.categories];
      newCategories.splice(categoryIndex, 1);
      return { ...prevData, categories: newCategories };
    });
  };

  const deleteTodo = (categoryIndex, todoIndex) => {
    const updatedCategories = [...data.categories];
    updatedCategories[categoryIndex].todoList.splice(todoIndex, 1);
    setData(prevData => ({ ...prevData, categories: updatedCategories }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/api/trips/${selectedTrip._id}`,
        {
          ...data,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Trip updated successfully:', response.data);
      // Оновити список мандрівок або надати користувачеві зворотній зв'язок
    } catch (error) {
      console.error('Error updating trip:', error);
    }
  };

  return (
    <>
      <h2>Select a Trip to Update</h2>
      <ul>
        {trips.map(trip => (
          <li key={trip._id} onClick={() => handleTripSelect(trip)}>
            {trip.title}
          </li>
        ))}
      </ul>

      {selectedTrip && (
        <form onSubmit={handleSubmit}>
          <h3>Update Trip: {selectedTrip.title}</h3>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
          </label>
          <h2>Categories</h2>
          {data.categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <label>
                Category Name:
                <input
                  type="text"
                  name="nameCategory"
                  value={category.nameCategory}
                  onChange={event => handleCategoryChange(event, categoryIndex)}
                />
              </label>
              <label>
                Public:
                <input
                  type="checkbox"
                  name="publicList"
                  checked={category.publicList}
                  onChange={event =>
                    handleCategoryPublicChange(event, categoryIndex)
                  }
                />
              </label>
              <h3>Todo List</h3>
              {category.todoList.map((todo, todoIndex) => (
                <div key={todoIndex}>
                  <label>
                    Todo:
                    <input
                      type="text"
                      name="todo"
                      value={todo.todo}
                      onChange={event =>
                        handleTodoChange(event, categoryIndex, todoIndex)
                      }
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => deleteTodo(categoryIndex, todoIndex)}
                  >
                    Delete Todo
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => addTodo(categoryIndex)}>
                Add Todo
              </button>
              <button
                type="button"
                onClick={() => deleteCategory(categoryIndex)}
              >
                Delete Category
              </button>
            </div>
          ))}
          <button type="button" onClick={addCategory}>
            Add Category
          </button>
          <label>
            Public:
            <input
              type="checkbox"
              name="isPublic"
              checked={data.isPublic}
              onChange={handlePublicChange}
            />
          </label>
          <button type="submit">Update Trip</button>
        </form>
      )}
    </>
  );
};

export default UpdateTrip;

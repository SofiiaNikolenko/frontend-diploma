import { useState, useEffect } from 'react';

const AddTripForm = () => {
  // const [data, setData] = useState({
  //   title: '',
  //   description: '',
  //   categories: [
  //     {
  //       nameCategory: '',
  //       todoList: [
  //         {
  //           todo: '',
  //         },
  //       ],
  //       publicList: false,
  //     },
  //   ],
  //   isPublic: false,
  //   photos: {},
  // });

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
    // photos: {},
  };

  const [data, setData] = useState(initialState);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('data'));

    if (savedData) {
      setData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

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
    // setData(prevData => {
    //   const newCategories = [...prevData.categories];
    //   newCategories[categoryIndex].todoList.push({
    //     todo: '',
    //   });

    //   return {
    //     ...prevData,
    //     categories: newCategories,
    //   };
    // });
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
    // setData(prevData => {
    //   const newCategories = [...prevData.categories];
    //   newCategories[categoryIndex].todoList.splice(todoIndex, 1);

    //   return {
    //     ...prevData,
    //     categories: newCategories,
    //   };
    // });
  };

  // const handlePhotoChange = event => {
  //   const files = event.target.files;
  //   const selectedPhotos = Array.from(files);

  //   const updatedPhotos = { ...data.photos };
  //   selectedPhotos.forEach((photo, index) => {
  //     updatedPhotos[index] = {
  //       file: photo,
  //       url: URL.createObjectURL(photo),
  //       publicId: null,
  //     };
  //   });

  //   setData(prevData => ({
  //     ...prevData,
  //     photos: updatedPhotos,
  //   }));
  // };

  // const handleRemovePhoto = index => {
  //   const updatedPhotos = { ...data.photos };
  //   delete updatedPhotos[index];

  //   setData(prevData => ({
  //     ...prevData,
  //     photos: updatedPhotos,
  //   }));
  // };

  const handleSubmit = event => {
    event.preventDefault();

    const token = localStorage.getItem('token');
    const url = 'http://localhost:3000/api/trips';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseData => {
        console.log('Response:', responseData);
        setData(initialState);
        localStorage.removeItem('data');
        // Додаткова логіка після успішної відповіді з сервера
      })
      .catch(error => {
        console.error('Error:', error);
        // Обробка помилки
      });
    // setData(initialState);
    // const formData = new FormData();
    // const { photos, ...tripData } = data;

    // Object.values(data.photos).forEach(photo => {
    //   formData.append('photos', photo.file);
    // });

    // Object.entries(tripData).forEach(([key, value]) => {
    //   formData.append(key, JSON.stringify(value));
    // });

    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    //   body: formData,
    // })
    //   .then(response => response.json())
    //   .then(responseData => {
    //     console.log('Response:', responseData);
    //     // Додаткова логіка після успішної відповіді з сервера
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //     // Обробка помилки
    //   });
  };

  return (
    <>
      <h1>Form</h1>
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
            <label htmlFor={`category-${categoryIndex}`}>Category Name</label>
            <input
              type="text"
              id={`category-${categoryIndex}`}
              name="nameCategory"
              value={category.nameCategory}
              onChange={event => handleCategoryChange(event, categoryIndex)}
            />

            {/* Category Public */}
            <label htmlFor={`category-public-${categoryIndex}`}>Public</label>
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
            <button type="button" onClick={() => deleteCategory(categoryIndex)}>
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

        {/* Photos */}
        {/* <input type="file" multiple onChange={handlePhotoChange} />

        {Object.entries(data.photos).map(([index, photo]) => (
          <div key={index}>
            <img src={photo.url} alt={`Photo ${index}`} />
            <button type="button" onClick={() => handleRemovePhoto(index)}>
              Remove Photo
            </button>
          </div>
        ))} */}

        {/* Submit */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddTripForm;

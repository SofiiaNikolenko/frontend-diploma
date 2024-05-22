import { useState, useEffect } from 'react';
import AddPhotos from './AddPhotos/AddPhotos';
import { Input, Checkbox, Button } from 'antd';
import ButtonSend from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import {
  Form,
  CategoriesDiv,
  PublicCheckboxDiv,
  TodoDiv,
  ChangeDiv,
  BottomDiv,
} from './AddTripForm.style';

const { TextArea } = Input;

const AddTripForm = () => {
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

  const handleSubmit = event => {
    event.preventDefault();

    const token = localStorage.getItem('token');
    const url = 'http://localhost:3000/api/trips';

    const updatedData = {
      ...data,
      photos: cdnUrls,
    };

    fetch(url, {
      method: 'POST',
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
        window.location.reload();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {/* Title */}
        <label htmlFor="title">Title</label>
        <Input
          type="text"
          id="title"
          name="title"
          value={data.title}
          onChange={handleChange}
        />

        {/* Description */}
        <label htmlFor="description">Description</label>
        <TextArea
          type="text"
          id="description"
          name="description"
          value={data.description}
          onChange={handleChange}
        />

        {/* Categories */}
        <h4>Categories</h4>
        {data.categories.map((category, categoryIndex) => (
          <CategoriesDiv key={categoryIndex}>
            <label htmlFor={`category-${categoryIndex}`}>Category Name</label>
            <TodoDiv>
              <Input
                type="text"
                id={`category-${categoryIndex}`}
                name="nameCategory"
                value={category.nameCategory}
                onChange={event => handleCategoryChange(event, categoryIndex)}
              />

              {/* Category Public */}
              <PublicCheckboxDiv>
                <label htmlFor={`category-public-${categoryIndex}`}>
                  Public
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
            <label>Todo List</label>
            {category.todoList.map((todo, todoIndex) => (
              <div key={todoIndex}>
                {/* <label htmlFor={`todo-${categoryIndex}-${todoIndex}`}>
                  Todo
                </label> */}
                <TodoDiv>
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
                    Delete Todo
                  </Button>
                </TodoDiv>
              </div>
            ))}
            <ChangeDiv>
              {/* Add Todo */}
              <Button
                type="primary"
                style={{ backgroundColor: '#8DD3BB' }}
                onClick={() => addTodo(categoryIndex)}
              >
                Add Todo
              </Button>

              {/* Delete Category */}
              <Button
                type="primary"
                style={{ backgroundColor: '#ED5E68' }}
                danger
                onClick={() => deleteCategory(categoryIndex)}
              >
                Delete Category
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
            Add Category
          </Button>

          {/* Public */}
          <PublicCheckboxDiv>
            <label htmlFor="isPublic">Public trip</label>
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
          Submit
        </ButtonSend>
      </Form>
    </>
  );
};

export default AddTripForm;

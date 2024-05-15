import { useState } from 'react';

const AddTripForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [todo, setTodo] = useState('');
  const [publicList, setPublicList] = useState(true);

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({
      title,
      description,
      categories: [
        {
          nameCategory: categoryName,
          todoList: [{ todo }],
          publicList,
        },
      ],
      public: true,
    });

    setTitle('');
    setDescription('');
    setCategoryName('');
    setTodo('');
    setPublicList(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <br />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          required
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
        <br />

        <label htmlFor="categoryName">Category Name</label>
        <input
          type="text"
          id="categoryName"
          name="categoryName"
          required
          value={categoryName}
          onChange={event => setCategoryName(event.target.value)}
        />
        <br />

        <label htmlFor="todo">Todo</label>
        <input
          type="text"
          id="todo"
          name="todo"
          required
          value={todo}
          onChange={event => setTodo(event.target.value)}
        />
        <br />

        <label htmlFor="publicTodo">Public Todo</label>
        <input
          type="checkbox"
          id="publicTodo"
          name="publicTodo"
          checked={publicList}
          onChange={event => setPublicList(event.target.checked)}
        />
        <br />

        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default AddTripForm;

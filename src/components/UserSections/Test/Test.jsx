import React, { useState } from 'react';
import axios from 'axios';
import { useForm, useFieldArray } from 'react-hook-form';

const Test = () => {
  const { register, handleSubmit, control, reset } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'categories',
  });
  const [error, setError] = useState(null);

  const onSubmit = async data => {
    const token = localStorage.getItem('token');
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('isPublic', data.isPublic);
    formData.append('categories', JSON.stringify(data.categories));

    Array.from(data.photos).forEach(photo => {
      formData.append('photos', photo);
    });

    try {
      const response = await axios.post(
        'http://localhost:3000/api/trips',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      reset();
      setError(null);
    } catch (error) {
      console.error(error.response);
      setError(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <label htmlFor="title">Title</label>
        <input id="title" {...register('title', { required: true })} />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" {...register('description')} />
      </div>

      <div>
        <label htmlFor="isPublic">Public</label>
        <input type="checkbox" id="isPublic" {...register('isPublic')} />
      </div>

      <div>
        <label htmlFor="photos">Photos</label>
        <input type="file" id="photos" {...register('photos')} multiple />
      </div>

      <div>
        <label>Categories</label>
        {fields.map((item, index) => (
          <div key={item.id}>
            <input
              {...register(`categories.${index}.nameCategory`, {
                required: true,
              })}
              placeholder="Category Name"
            />
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
            <div>
              <label>Todo List</label>
              <input
                {...register(`categories.${index}.todoList.0.todo`, {
                  required: true,
                })}
                placeholder="Todo"
              />
            </div>
            <div>
              <label>Public List</label>
              <input
                type="checkbox"
                {...register(`categories.${index}.publicList`)}
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() => append({ nameCategory: '', todoList: [{ todo: '' }] })}
        >
          Add Category
        </button>
      </div>

      <button type="submit">Add Trip</button>
    </form>
  );
};

export default Test;

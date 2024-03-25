import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdoteAction } from '../reducers/anecdoteReducer'; 
import { setNotificationAction } from '../reducers/notificationReducer'; 

const NewAnecdote = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    dispatch(createAnecdoteAction(content)); 
    dispatch(setNotificationAction(`Anecdote '${content}' successfully added`, 5)); 
  };

  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">add</button>
    </form>
  );
};

export default NewAnecdote;

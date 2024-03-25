import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();

  const voteHandler = () => {
    dispatch(vote(anecdote));
    dispatch(setNotification(`You voted for '${anecdote.content}'`, 5));
  };

  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={voteHandler}>vote</button>
      </div>
    </div>
  );
};

const AnecdoteList = () => {
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if (filter === null) {
      return anecdotes;
    }
    const regex = new RegExp(filter, 'i');
    return anecdotes.filter((anecdote) => anecdote.content.match(regex));
  });

  const sortedAnecdotes = anecdotes.slice().sort((a, b) => b.votes - a.votes);

  return sortedAnecdotes.map((anecdote) => (
    <Anecdote key={anecdote.id} anecdote={anecdote} />
  ));
};

export default AnecdoteList;

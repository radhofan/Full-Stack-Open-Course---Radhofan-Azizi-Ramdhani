import React, { useState } from 'react';

const App = () => {
  const initialAnecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const initialVotes = [5, 6, 13, 15, 19, 13, 2, 3];

  const [anecdotes, setAnecdotes] = useState([...initialAnecdotes]);
  const [votes, setVotes] = useState([...initialVotes]);
  const [selected, setSelected] = useState(0);

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const vote = () => {
    const newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  };

  const mostVotedIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>

      <div>
        <h1>Anecdote of the Day</h1>
        <div>{anecdotes[selected]}</div>
        <div>Has {votes[selected]} votes</div>
        <button onClick={vote}>Vote</button>
        <button onClick={handleNextAnecdote}>See Next Anecdote</button>
      </div>

      <div>
        <h1>Most Voted Anecdote</h1>
        <div>{anecdotes[mostVotedIndex]}</div>
        <div>Has {votes[mostVotedIndex]} votes</div>
      </div>
      
    </div>
  );
};

export default App;

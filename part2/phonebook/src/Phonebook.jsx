import React, { useState } from 'react';
import axios from 'axios';

const Phonebook = ({ persons, deletePerson }) => {
  const [message, setMessage] = useState(null);

  const handleDeletePerson = async (id) => {
    if (window.confirm('Are you sure you want to delete this person?')) {
      try {
        await deletePerson(id);
        setMessage({ text: 'Person deleted successfully!', type: 'success' });
      } catch (error) {
        setMessage({ text: 'Error deleting person. Please try again.', type: 'error' });
      }
      setTimeout(() => setMessage(null), 3000); 
    }
  };

  return (
    <div>
      {message && (
        <div style={{ backgroundColor: message.type === 'success' ? 'lightgreen' : 'lightcoral', padding: '10px', marginBottom: '10px' }}>
          {message.text}
        </div>
      )}
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} - {person.number}
            <button onClick={() => handleDeletePerson(person.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Phonebook;

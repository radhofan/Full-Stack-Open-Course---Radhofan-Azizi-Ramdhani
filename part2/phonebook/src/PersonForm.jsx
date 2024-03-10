import React, { useState } from 'react';
import addPerson from './addPerson';

const PersonForm = ({ newName, newNumber, setNewName, setNewNumber, persons, setPersons }) => {
  const [notification, setNotification] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
      setNotification(`${newName} is already added to the phonebook!`);
      setTimeout(() => {
        setNotification(null);
      }, 3000); 
      return;
    }

    await addPerson(newName, newNumber, persons, setPersons);
    setNewName('');
    setNewNumber('');

    setNotification('Person added successfully!');
    setTimeout(() => {
      setNotification(null);
    }, 3000); 
  };

  return (
    <div>
      {notification && <div style={{ backgroundColor: 'lightgreen', padding: '10px', marginBottom: '10px' }}>{notification}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;

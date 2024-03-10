import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchFilter from './SearchFilter';
import PersonForm from './PersonForm';
import Phonebook from './Phonebook';
import deletePerson from './deletePerson'; 

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeletePerson = async (id) => {
    await deletePerson(id, persons, setPersons); 
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      <h3>Add new data</h3>
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        setNewName={setNewName} 
        setNewNumber={setNewNumber} 
        persons={persons} 
        setPersons={setPersons} 
      />
      <h2>Numbers</h2>
      <Phonebook persons={filteredPersons} deletePerson={handleDeletePerson} />
    </div>
  );
};

export default App;

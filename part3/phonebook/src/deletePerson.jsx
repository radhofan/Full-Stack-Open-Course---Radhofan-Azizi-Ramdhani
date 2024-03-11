import React from 'react';
import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

export const deletePerson = async (id, persons, setPersons) => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
    setPersons(persons.filter(person => person.id !== id));
  } catch (error) {
    console.error('Error deleting person:', error);
  }
};

export default deletePerson;

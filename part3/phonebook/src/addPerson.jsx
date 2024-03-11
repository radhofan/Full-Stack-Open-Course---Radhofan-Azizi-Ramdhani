import React from 'react';
import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const addPerson = async (newName, newNumber, persons, setPersons) => {
  try {
    const response = await axios.post(baseUrl, {
      name: newName,
      number: newNumber
    });

    const newPerson = response.data;
    setPersons([...persons, newPerson]);
  } catch (error) {
    console.error('Error adding person:', error);
  }
};

export default addPerson;

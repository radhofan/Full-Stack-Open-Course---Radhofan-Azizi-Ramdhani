import React from 'react';
import addPerson from './addPerson';

const SearchFilter = ({ searchQuery, handleSearchChange }) => {
  return (
    <div>
      Search: <input value={searchQuery} onChange={handleSearchChange} />
    </div>
  );
};

export default SearchFilter;

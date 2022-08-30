import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchCharacters({ characters, setFilteredCharacters }) {
  const [query, setQuery] = useState('');
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    const results = characters.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredCharacters(results);
  };
  return (
    <>
      <input placeholder="Search" value={query} onChange={handleChange} />
    </>
  );
}

SearchCharacters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  setFilteredCharacters: PropTypes.func.isRequired,
};

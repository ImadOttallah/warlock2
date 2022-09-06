import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchCast({ cast, setFilteredCast }) {
  const [query, setQuery] = useState('');
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    const results = cast.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredCast(results);
  };
  return (
    <>
      <input placeholder="Search" value={query} onChange={handleChange} />
    </>
  );
}

SearchCast.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  setFilteredCast: PropTypes.func.isRequired,
};

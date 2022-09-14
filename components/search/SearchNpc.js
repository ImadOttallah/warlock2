import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchNpc({ npc, setFilteredNpc }) {
  const [query, setQuery] = useState('');
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    const results = npc.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredNpc(results);
  };
  return (
    <>
      <input placeholder="Search" value={query} onChange={handleChange} />
    </>
  );
}

SearchNpc.propTypes = {
  npc: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  setFilteredNpc: PropTypes.func.isRequired,
};

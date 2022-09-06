import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchCampaigns({ campaign, setFilteredCampaign }) {
  const [query, setQuery] = useState('');
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    const results = campaign.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredCampaign(results);
  };
  return (
    <>
      <input placeholder="Search" value={query} onChange={handleChange} />
    </>
  );
}

SearchCampaigns.propTypes = {
  campaign: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  setFilteredCampaign: PropTypes.func.isRequired,
};

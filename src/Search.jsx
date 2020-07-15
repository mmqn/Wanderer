import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const Search = ({ uniqueValues, handleFiltering }) => {
  const [query, setQuery] = useState('');
  const [matchedFilters, setMatchedFilters] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  // Flattened list of unique search options
  const searchOptions = useMemo(() => {
    const flatUniqueOptions = [];
    const properties = Object.keys(uniqueValues);

    properties.forEach(property => {
      uniqueValues[property].forEach(value => {
        const parsedValue = `${property}|${value}`;
        flatUniqueOptions.push(parsedValue);
      });
    });

    return flatUniqueOptions;
  }, [uniqueValues]);

  const filterPlaces = query => {
    if (query) {
      const queryRegex = new RegExp(query, 'gi');

      const results = searchOptions.filter(value => queryRegex.test(value));

      const filters = results.map(result => {
        const [targetFilterType, targetFilterValue] = result.split('|');
        return { id: result, targetFilterType, targetFilterValue };
      });

      setMatchedFilters(filters);
    } else setMatchedFilters([]);
  };

  const handleSearch = e => {
    const query = e.target.value;

    setQuery(query);
    filterPlaces(query);
  };

  const handleFocusInput = () => {
    setIsInputFocused(true);
  };

  const handleApplyFilter = filter => {
    setQuery('');
    setIsInputFocused(false);
    handleFiltering(filter);
  };

  const handleCancelSearch = () => {
    setQuery('');
    setIsInputFocused(false);
  };

  return (
    <>
      <div className='search-bar'>
        <input
          type='text'
          placeholder={`Search ${uniqueValues.Address.length} places...`}
          value={query}
          onChange={handleSearch}
          onFocus={handleFocusInput}
        />

        {query.length > 0 && (
          <div className='search-results'>
            {matchedFilters.length > 0 ? (
              matchedFilters.map((filter, i) => (
                <div
                  key={`${i}-${filter.targetFilterType}-${filter.targetFilterValue}`}
                  className='filter-typevalue'
                  style={{ margin: '4px' }}
                  role='button'
                  onClick={() => handleApplyFilter(filter)}
                >
                  <div className='filter-type'>{filter.targetFilterType}</div>

                  <div className='filter-value'>{filter.targetFilterValue}</div>
                </div>
              ))
            ) : (
              <span style={{ color: '#ffffff' }}>No results found 🌧</span>
            )}
          </div>
        )}
      </div>

      {isInputFocused && (
        <div className='background-cover' onClick={handleCancelSearch} />
      )}
    </>
  );
};

Search.propTypes = {
  uniqueValues: PropTypes.shape({
    Name: PropTypes.arrayOf(PropTypes.string),
    Categories: PropTypes.arrayOf(PropTypes.string),
    Address: PropTypes.arrayOf(PropTypes.string),
    City: PropTypes.arrayOf(PropTypes.string),
    Region: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handleFiltering: PropTypes.func.isRequired,
};

export default Search;

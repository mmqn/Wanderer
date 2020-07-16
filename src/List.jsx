import React, { useState, useEffect, useMemo, Fragment } from 'react';
import PropTypes from 'prop-types';
import Search from './Search.jsx';
import Card from './components/Card';
import checkPlaceAgainstFilter from './util/checkPlaceAgainstFilter';
import MobileOptionsMenu from './components/MobileOptionsMenu.jsx';

const List = ({ places, isMobile, mapboxKey }) => {
  const [currentPlaces, setCurrentPlaces] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [areAllCardsExpanded, setAreAllCardsExpanded] = useState(false);
  const [stackedView, setStackedView] = useState(false);
  // Currently open category when in stacked view
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState('');

  useEffect(() => {
    setCurrentPlaces(places);
  }, [places]);

  const uniqueValues = useMemo(() => {
    const Name = places.map(property => property.Name);
    const Categories = [
      ...new Set(places.map(property => property.Categories).flat()),
    ];
    const Address = places.map(property => property.Address);
    const City = [...new Set(places.map(property => property.City).flat())];
    const Region = [...new Set(places.map(property => property.Region).flat())];

    return { Name, Categories, Address, City, Region };
  }, [places]);

  /**
   * @param {Array of Objects} filters: Objects follows shape:
   * {
   *    id: {String},
   * 	  targetFilterType: {String},
   * 	  targetFilterValue: {String},
   * }
   */
  const applyFilters = filters => {
    if (filters.length === 1) {
      const newCurrentPlaces = places.filter(place =>
        checkPlaceAgainstFilter(place, filters[0]),
      );

      setCurrentPlaces(newCurrentPlaces);
    } else if (filters.length > 1) {
      const newCurrentPlaces = places.filter(place => {
        const matchSum = filters.reduce((acc, cur) => {
          if (typeof acc === 'object' && typeof cur === 'object') {
            const accMatch = checkPlaceAgainstFilter(place, acc);
            const curMatch = checkPlaceAgainstFilter(place, cur);

            if (accMatch && curMatch) return 2;
            else if (accMatch || accMatch) return 1;
            return 0;
          } else if (typeof acc === 'number' && typeof cur === 'object') {
            if (checkPlaceAgainstFilter(place, cur)) return acc + 1;
            return acc;
          }
          return 0;
        });

        return matchSum === filters.length;
      });

      setCurrentPlaces(newCurrentPlaces);
    } else setCurrentPlaces(places);

    setAppliedFilters(filters);
  };

  /**
   * @param {Object} newFilter: Object with following shape:
   * {
   *    id: {String},
   *    targetFilterType: {String},
   *    targetFilterValue: {String},
   * }
   */
  const handleFiltering = newFilter => {
    const mergedFilters =
      appliedFilters.find(
        appliedFilter => appliedFilter.id === newFilter.id,
      ) === undefined
        ? [...appliedFilters, newFilter]
        : appliedFilters;

    applyFilters(mergedFilters);
  };

  const handleRemoveFilter = filterToRemove => {
    const filteredAppliedFilters = appliedFilters.filter(
      appliedFilter => appliedFilter.id !== filterToRemove.id,
    );

    applyFilters(filteredAppliedFilters);
  };

  const handleToggleCardsDensity = e => {
    e.stopPropagation();
    setAreAllCardsExpanded(prevValue => !prevValue);
  };

  const handleToggleStackedView = e => {
    e.stopPropagation();
    setStackedView(prevValue => !prevValue);
  };

  const cardsContainer = stackedView ? (
    <div className='cards-container'>
      {uniqueValues.Categories.map(category => {
        const placesInCategory = currentPlaces.filter(place =>
          place.Categories.includes(category),
        );

        const handleShowCategoryPlaces = () => {
          if (category === currentSelectedCategory) {
            setCurrentSelectedCategory('');
          } else {
            setCurrentSelectedCategory(category);
          }
        };

        if (category === currentSelectedCategory) {
          return (
            <Fragment key={category}>
              <div
                className='card card-stacked'
                role='button'
                onClick={handleShowCategoryPlaces}
              >
                <h1>{category}</h1>
              </div>

              {placesInCategory.map(place => (
                <Card
                  key={place.id}
                  placeDetails={place}
                  areAllCardsExpanded={areAllCardsExpanded}
                  isMobile={isMobile}
                  mapboxKey={mapboxKey}
                  handleFiltering={handleFiltering}
                />
              ))}
            </Fragment>
          );
        } else if (placesInCategory.length > 0) {
          return (
            <div
              key={category}
              className='card card-stacked'
              role='button'
              onClick={handleShowCategoryPlaces}
            >
              <h1>{category}</h1>
            </div>
          );
        }
        return null;
      })}
    </div>
  ) : (
    <div className='cards-container'>
      {currentPlaces.map(place => (
        <Card
          key={place.id}
          placeDetails={place}
          areAllCardsExpanded={areAllCardsExpanded}
          isMobile={isMobile}
          mapboxKey={mapboxKey}
          handleFiltering={handleFiltering}
        />
      ))}
    </div>
  );

  return (
    <>
      <Search uniqueValues={uniqueValues} handleFiltering={handleFiltering} />

      {cardsContainer}

      {isMobile ? (
        <MobileOptionsMenu
          appliedFilters={appliedFilters}
          handleRemoveFilter={handleRemoveFilter}
          handleToggleCardsDensity={handleToggleCardsDensity}
          handleToggleStackedView={handleToggleStackedView}
        />
      ) : (
        <>
          {appliedFilters.length > 0 && (
            <div
              className='applied-filters-menu'
              style={{ maxHeight: '80vh', overflowY: 'auto' }}
            >
              <h2
                key={`flash-${appliedFilters.length}`}
                className='flash'
                style={{ paddingLeft: '2px' }}
              >
                Applied Filters
              </h2>

              {appliedFilters.map(filter => (
                <div
                  key={`${filter.targetFilterType}-${filter.targetFilterValue}`}
                  className='filter-typevalue remove-filter'
                  role='button'
                  onClick={() => handleRemoveFilter(filter)}
                >
                  <div className='filter-type'>{filter.targetFilterType}</div>

                  <div className='filter-value'>{filter.targetFilterValue}</div>
                </div>
              ))}
            </div>
          )}

          <button
            type='button'
            style={{ position: 'fixed', bottom: '50px', right: '20px' }}
            onClick={handleToggleCardsDensity}
          >
            {areAllCardsExpanded ? 'Condense All Cards' : 'Expand All Cards'}
          </button>

          <button
            type='button'
            style={{ position: 'fixed', bottom: '15px', right: '20px' }}
            onClick={handleToggleStackedView}
          >
            Switch to {stackedView ? 'Singles' : 'Stacks'} View
          </button>
        </>
      )}
    </>
  );
};

List.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      Name: PropTypes.string,
      Categories: PropTypes.arrayOf(PropTypes.string),
      Description: PropTypes.string,
      Notes: PropTypes.string,
      Address: PropTypes.string,
      City: PropTypes.string,
      Region: PropTypes.string,
      Coordinates: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
      }),
    }),
  ).isRequired,
  isMobile: PropTypes.bool,
  mapboxKey: PropTypes.string,
};

List.defaultProps = {
  isMobile: false,
  mapboxKey: '',
};

export default List;

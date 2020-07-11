import getPropertyType from './getPropertyType';

const checkPlaceAgainstFilter = (place, filter) => {
  if (getPropertyType(place, filter.targetFilterType) === 'array') {
    if (place[filter.targetFilterType].includes(filter.targetFilterValue)) {
      return true;
    }
  } else {
    if (place[filter.targetFilterType] === filter.targetFilterValue) {
      return true;
    }
  }
  return false;
};

export default checkPlaceAgainstFilter;

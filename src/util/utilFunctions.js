const getPropertyType = (testObject, targetObjectKey) => {
  if (testObject[targetObjectKey]) {
    if (
      typeof testObject[targetObjectKey] === 'object' &&
      testObject[targetObjectKey].length
    )
      return 'array';
    else if (typeof testObject[targetObjectKey] === 'object') return 'object';
    return 'primitive';
  }
  return 'key does not exist';
};

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

export { getPropertyType, checkPlaceAgainstFilter };

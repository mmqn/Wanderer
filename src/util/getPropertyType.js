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

export default getPropertyType;

/**
 *
 * @param {Object} item
 * @param {Number} index
 * @param {Array} array
 * @param {Object} options
 */
export const addOneAfter = (item, index, array, { maxSize = null } = {}) => {
  if (maxSize && maxSize >= array.length) return array;

  const beforeArray = array.slice(0, index + 1) || [];
  const afterArray = array.slice(index + 1) || [];
  let updatedArray = [];

  updatedArray = updatedArray.concat(beforeArray);
  updatedArray = updatedArray.concat(item);
  updatedArray = updatedArray.concat(afterArray);

  return updatedArray;
};

/**
 *
 * @param {Number} index
 * @param {Array} array
 * @param {Object} options
 */
export const removeOne = (index, array, { atLeastOne = false } = {}) => {
  const updatedArray = [...array];
  if (atLeastOne && array.length < 2) return array;

  updatedArray.splice(index, 1);
  return updatedArray;
};

/**
 *
 * @param {array} array
 * @param {function} validator
 */
export function cleanNullValues(array, validator, { atLeastOne = false } = {}) {
  if (!array) return array;

  let filteredArray = [];

  filteredArray = array.filter((i) => {
    if (validator) return validator(i);
    return i;
  });

  if (atLeastOne && filteredArray.length < 1) {
    return [array[0]];
  }

  return filteredArray;
}

const array = {
  addOneAfter,
  removeOne,
  cleanNullValues
};

export default array;

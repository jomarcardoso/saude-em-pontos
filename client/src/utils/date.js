export function convertDateToBrazilianDate(string) {
  return separateDate(string).reverse().join('/');
}

/**
 * @returns {array} [year, month, day]
 */
export function separateDate(string) {
  return string.split('-');
}

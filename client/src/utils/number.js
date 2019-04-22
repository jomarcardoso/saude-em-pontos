import { isArray } from './validate';

export function filterArabicNumerals(value) {
  const aValue = isArray(value) ? [...value] : value.split('');
  return aValue.filter(e => /[0-9]/.test(e));
}

/**
 * @param {number,string} value
 * @param {string} signal
 * @returns {array} [integer,decimal]
 */
export function splitDecimal(value, { signal = '.' } = {}) {
  let string = String(value);
  if (!string.includes('.')) string = string.concat('.00');
  return string.split(signal);
}

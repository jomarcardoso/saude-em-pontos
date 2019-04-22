export function isNumber(anything) {
  return typeof anything === 'number';
}

export function isStringNumber(string) {
  return Number.isNaN(Number(string));
}

export function isArray(anything) {
  return Array.isArray(anything);
}

export function isNumberNull(anything) {
  return isNumber(anything) && anything === 0;
}

export function isString(anything) {
  return typeof anything === 'string';
}

export function isStringEmpty(anything) {
  return isString(anything) && anything.length === 0;
}

export function isFunction(anything) {
  return typeof (anything) === 'function';
}

export function isPhone(anything) {
  return !!anything && (anything.length === 11 || anything.length === 10);
}

export function isCep(anything) {
  return anything && anything.length === 8;
}

export function isCpf(anything) {
  return anything && anything.length === 11;
}

export function isDate(anything) {
  return new RegExp(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/).test(anything);
}

export function isDateAbove(value, limit) {
  const date = isDate(value) ? value : new Date(value);
  if (limit && (limit < date)) return true;
  return false;
}

export function isDateBelow(value, limit) {
  const date = isDate(value) ? value : new Date(value);
  if (limit && (date < limit)) return true;
  return false;
}

export function isDateBetweenMinMax(value, { min, max } = {}) {
  const date = isDate(value) ? value : new Date(value);
  if (min && (date < min)) return false;
  if (max && (max < date)) return false;
  return true;
}

export function isEmail(anything) {
  return new RegExp(/^([\w_.\-+])+@([\w-]+.)+([\w]{2,10})+$/).test(anything);
}

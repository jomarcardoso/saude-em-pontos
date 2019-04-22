import { addOneAfter } from './array';
import { filterArabicNumerals, splitDecimal } from './number';

export function phoneMask(phone) {
  let arrayPhone = filterArabicNumerals(phone);
  const lengthArrayPhone = arrayPhone.length;

  if (lengthArrayPhone > 2) {
    arrayPhone = addOneAfter('(', -1, arrayPhone);
    arrayPhone = addOneAfter(') ', 2, arrayPhone);

    if (lengthArrayPhone > 10) {
      arrayPhone = addOneAfter(' ', 8, arrayPhone);
    } else if (lengthArrayPhone > 8) {
      arrayPhone = addOneAfter(' ', 7, arrayPhone);
    }
  }

  return arrayPhone.slice(0, 14).join('');
}

export function phoneUnmask(phone) {
  return filterArabicNumerals(phone).slice(0, 11).join('');
}

export function cepMask(cep) {
  let arrayCep = filterArabicNumerals(cep);
  const lengthArrayCep = arrayCep.length;

  if (lengthArrayCep > 2) arrayCep = addOneAfter('.', 1, arrayCep);
  if (lengthArrayCep > 5) arrayCep = addOneAfter('-', 5, arrayCep);

  return arrayCep.slice(0, 10).join('');
}

export function cepUnmask(cep) {
  return filterArabicNumerals(cep).slice(0, 8).join('');
}

export function cpfMask(cpf) {
  let arrayCep = filterArabicNumerals(cpf);
  const lengthArrayCep = arrayCep.length;

  if (lengthArrayCep > 3) arrayCep = addOneAfter('.', 2, arrayCep);
  if (lengthArrayCep > 6) arrayCep = addOneAfter('.', 6, arrayCep);
  if (lengthArrayCep > 9) arrayCep = addOneAfter('-', 10, arrayCep);

  return arrayCep.slice(0, 14).join('');
}

export function cpfUnmask(cpf) {
  return filterArabicNumerals(cpf).slice(0, 11).join('');
}

// FIXME: if filled with "e"
export function numberMask(number) {
  return String(number);
}

export function numberUnmask(string) {
  const stringNumber = string.replace(/[^0-9.]/g, '');
  return stringNumber === '' ? '' : Number(stringNumber);
}

export function moneyMask(value) {
  const stringMoney = String(value);

  if (stringMoney === '') return '';

  const [integer, decimal] = splitDecimal(stringMoney);
  return `R$ ${integer},${decimal.padEnd(2, '0')}`;
}

export function moneyUnmask(value) {
  let stringMoney = String(value);
  stringMoney = stringMoney.replace(/[^0-9]/g, '');

  if (stringMoney === '') return '';

  stringMoney = stringMoney.padStart(3, '0');
  let arrayMoney = stringMoney.split('');
  arrayMoney = addOneAfter('.', arrayMoney.length - 3, arrayMoney);
  stringMoney = arrayMoney.join('');

  const [integer, decimal] = splitDecimal(stringMoney);

  stringMoney = `${integer}.${decimal}`;
  return Number(stringMoney);
}

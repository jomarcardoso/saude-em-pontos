import { convertDateToBrazilianDate } from '../utils/date';

export const messageEmptyField = 'O campo está vazio';
export const messageInvalidPhone = 'Telefone inválido';
export const messageInvalidCep = 'Cep inválido';
export const messageInvalidEmail = 'Email inválido';
export const messageInvalidCpf = 'Cpf inválido';
export const messageInvalidDate = 'Data inválida';
export const messageInvalidDateAbove = limit => `A data deve ser igual ou abaixo de ${convertDateToBrazilianDate(limit)}`;
export const messageInvalidDateBelow = limit => `A data deve ser igual ou acima de ${convertDateToBrazilianDate(limit)}`;
export const messageInvalidNumber = 'Número inválido';
export const messageInvalidNumberAbove = limit => `O número deve ser igual ou abaixo de ${limit}`;
export const messageInvalidNumberBelow = limit => `O número deve ser igual ou acima de ${limit}`;

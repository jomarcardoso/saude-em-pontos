import { addOneAfter, removeOne } from '../../utils/array';

export default function MultiFieldItem({
  render,
  index,
  error: errors = [''],
  value: values = [''],
  visibleError: visibleErrors = [''],
  setDataByName: setDatasByName,
  setErrorByName: setErrorsByName,
  setShowErrorByName: setShowErrorsByName,
  ...props
}) {
  const value = values[index];
  const error = errors[index];
  const visibleError = visibleErrors[index];

  function setDataByName(name, newValue) {
    const arrayValues = [...values];
    arrayValues[index] = newValue;
    setDatasByName(name, arrayValues);
  }

  function setErrorByName(name, newError) {
    const arrayErrors = [...errors];
    arrayErrors[index] = newError;
    setErrorsByName(name, arrayErrors);
  }

  function setShowErrorByName(name, newShowError) {
    const arrayShowErrors = [...visibleErrors];
    arrayShowErrors[index] = newShowError;
    setShowErrorsByName(name, arrayShowErrors);
  }

  function addBelow(name) {
    setDatasByName(name, addOneAfter('', index, values));
  }

  function deleteCurrent(name) {
    setDatasByName(name, removeOne(index, values, { atLeastOne: true }));
  }

  return render({
    addBelow,
    deleteCurrent,
    visibleError,
    error,
    value,
    setDataByName,
    setErrorByName,
    setShowErrorByName,
    ...props
  });
}

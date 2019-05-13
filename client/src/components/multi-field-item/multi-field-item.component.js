import React from 'react';

export default function MultiFieldItem({
  render,
  index,
  error: errors = [],
  value: values = [],
  visibleError: visibleErrors = [],
  setDataByName: setDatasByName,
  setErrorByName: setErrorsByName,
  setShowErrorByName: setShowErrorsByName,
  ...props
}) {
  const value = values[index];
  const error = errors[index];
  const visibleError = visibleErrors[index];

  function setDataByName(name, newValue)  {
    let arrayValues = [...values];
    arrayValues[index] = newValue;
    setDatasByName(name, arrayValues);
  }

  function setErrorByName(name, newError)  {
    let arrayErrors = [...errors];
    arrayErrors[index] = newError;
    setErrorsByName(name, arrayErrors);
  }

  function setShowErrorByName(name, newShowError)  {
    let arrayShowErrors = [...visibleErrors];
    arrayShowErrors[index] = newShowError;
    setShowErrorsByName(name, arrayShowErrors);
  }
debugger
  return render({
    visibleError,
    error,
    value,
    setDataByName,
    setErrorByName,
    setShowErrorByName,
    ...props
  });
}

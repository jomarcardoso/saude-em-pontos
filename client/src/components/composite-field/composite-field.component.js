import PropTypes from 'prop-types';

export default function CompositeField({
  name,
  setDataByName,
  setErrorByName,
  setShowErrorByName,
  render,
  shape,
  ...props
}) {
  const { value } = props;

  function _setDataByName(newName, newValue) {
    setDataByName(name, { ...value, [newName]: newValue });
  }

  function _setErrorByName(newName, newError) {
    setErrorByName(name, { [newName]: newError });
  }

  function _setShowErrorByName(newName, newVisibleError) {
    setShowErrorByName(name, { [newName]: newVisibleError });
  }

  debugger;

  return render({
    setDataByName: _setDataByName,
    // setErrorByName: _setErrorByName,
    setShowErrorByName: _setShowErrorByName,
    ...props
  });
}

CompositeField.propTypes = {
  value: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string, PropTypes.number, PropTypes.bool
  ]))
}

CompositeField.defaultProps = {
  value: {},
  visibleError: {},
  error: {},
}

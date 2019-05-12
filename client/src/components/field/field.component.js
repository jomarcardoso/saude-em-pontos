import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { isStringEmpty, isFunction } from '../../utils/validate';
import { messageEmptyField } from '../../texts/texts';

export default function Field({
  onBlur,
  onFocus,
  onChange,
  onKeyPress,
  error,
  visibleError,
  invalidMessage,
  invalidMessageEmptyField,
  setAShowError,
  setAnError,
  setAData,
  noValidate,
  render,
  ...props
}) {
  const { name } = props;

  function _hideError() {
    if (isFunction(setAShowError) && visibleError) setAShowError(name, false);
  }

  function _showError() {
    if (isFunction(setAShowError) && !visibleError) setAShowError(name, true);
  }

  function _toggleShowError() {
    if (error) {
      _showError();
      return;
    }

    _hideError();
  }

  function _handleBlur(e) {
    if (isFunction(onBlur)) onBlur(e);
    _toggleShowError();
  }

  function _handleFocus(e) {
    if (isFunction(onFocus)) onFocus(e);
    _hideError();
  }

  function _setEmptyMessageValidation() {
    if (error !== invalidMessageEmptyField && isFunction(setAnError)) {
      setAnError(name, invalidMessageEmptyField);
    }
  }

  function _setInvalidMessageValidation() {
    if (invalidMessage !== error) {
      if (isFunction(setAnError)) setAnError(name, invalidMessage);
    }
  }

  function _removeMessageValidation() {
    if (error && isFunction(setAnError)) setAnError(name, '');
  }

  function _validate() {
    if (noValidate) return;
    const { required, value } = props;

    const empty = isStringEmpty(value.trim());

    const requiredAndEmpty = required && empty;
    if (requiredAndEmpty) {
      _setEmptyMessageValidation();
      return;
    }

    const notRequiredAndEmpty = !required && empty;
    if (invalidMessage && !notRequiredAndEmpty) {
      _setInvalidMessageValidation();
      return;
    }

    _removeMessageValidation();
  }

  function _handleChange(e) {
    if (isFunction(onChange)) onChange(e);
    const { value } = e.target;

    if (isFunction(setAData)) setAData(name, value);
  }

  useEffect(_validate);

  return (
    render({
      onFocus: _handleFocus,
      onChange: _handleChange,
      onBlur: _handleBlur,
      ...props
    })
  );
}

Field.propTypes = {
  value: PropTypes.string,
  invalidMessage: PropTypes.string,
  invalidMessageEmptyField: PropTypes.string,
  render: PropTypes.func.isRequired,
  noValidate: PropTypes.bool
};


Field.defaultProps = {
  value: '',
  noValidate: false,
  invalidMessage: '',
  invalidMessageEmptyField: messageEmptyField
};

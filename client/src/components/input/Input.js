import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

import { isStringEmpty, isFunction } from '../../utils/validate';
import { messageEmptyField } from '../../texts/texts';

export default function SaInput({
  onBlur,
  onFocus,
  onChange,
  onKeyPress,
  error,
  visibleError,
  invalidMessage,
  setAShowError,
  setAnError,
  setAData,
  ...props
}) {
  function _hideError() {
    const { name } = props;
    if (isFunction(setAShowError) && visibleError) setAShowError(name, false);
  }

  function _toggleShowError() {
    const { name } = props;

    if (!isFunction(setAShowError)) return;

    if (error) {
      if (!visibleError) setAShowError(name, true);
      return;
    }

    if (visibleError) setAShowError(name, false);
  }

  function _handleKeyPress(e) {
    if (isFunction(onKeyPress)) onKeyPress(e);
    if (e.key === 'Enter') _toggleShowError();
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
    const { name } = props;

    if (error !== messageEmptyField && isFunction(setAnError)) {
      setAnError(name, messageEmptyField);
    }
  }

  function _setInvalidMessageValidation() {
    const { name } = props;

    if (invalidMessage !== error) {
      if (isFunction(setAnError)) setAnError(name, invalidMessage);
    }
  }

  function _removeMessageValidation() {
    const { name } = props;

    if (error && isFunction(setAnError)) setAnError(name, '');
  }

  function _validate() {
    const { required, value } = props;

    if (typeof value === 'undefined') return;

    const empty = isStringEmpty(value.trim());

    const notRequiredAndEmpty = !required && empty;
    if (notRequiredAndEmpty) return;

    const requiredAndEmpty = required && empty;
    if (requiredAndEmpty) {
      _setEmptyMessageValidation();
      return;
    }

    if (invalidMessage) {
      _setInvalidMessageValidation();
      return;
    }

    _removeMessageValidation();
  }

  function _handleChange(e) {
    if (isFunction(onChange)) onChange(e);
    const { name, value } = e.target;

    if (isFunction(setAData)) setAData(name, value);
  }

  useEffect(() => {
    _validate(); // validate before rendering
  });

  return (
    <Input
      onFocus={_handleFocus}
      onChange={_handleChange}
      onBlur={_handleBlur}
      onKeyPress={_handleKeyPress}
      {...props}
    />
  );
}

SaInput.propTypes = {
  type: PropTypes.string,
  invalidMessage: PropTypes.string
};

SaInput.defaultProps = {
  type: 'text',
  invalidMessage: ''
};
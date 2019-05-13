import React from 'react';
import PropTypes from 'prop-types';
import { Field } from '../field';

const emptyOptionAttributes = { value: '', children: '' };
const _defaultValue = '';

function _render({ children, ...props }) {
  const { value } = props;
  return (
    <option {...props} key={value}>{children || value}</option>
  );
}

_render.bind.propTypes = {
  children: PropTypes.elementType.isRequired,
  value: PropTypes.string.isRequired
};

export default function Select({ value, setDataByName, options, render, ...props }) {
  const _requiredOptions = [emptyOptionAttributes, ...options];

  let _setDataByName = setDataByName;
  let _value = value;

  if (options[0] && typeof options[0].value === 'number') {
    _value = String(value)
    _setDataByName = (name, newValue) => {
      setDataByName(name, Number(newValue));
    }
  }

  function _renderSelect(restProps) {
    return (
      <select {...restProps}>
        {_requiredOptions.map(render)}
      </select>
    );
  }

  return (
    <Field setDataByName={_setDataByName} value={_value} render={_renderSelect} {...props} />
  );
}

Select.propTypes = {
  value: PropTypes.string,
  required: PropTypes.bool,
  render: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({ value: PropTypes.string, children: PropTypes.elementType })
  )
};


Select.defaultProps = {
  value: _defaultValue,
  required: false,
  render: _render,
  options: [emptyOptionAttributes]
};

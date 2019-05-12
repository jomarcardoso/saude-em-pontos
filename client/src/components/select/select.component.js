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

export default function Select({ options, render, ...props }) {
  const _requiredOptions = [emptyOptionAttributes, ...options];

  function _renderSelect(restProps) {
    return (
      <select {...restProps}>
        {_requiredOptions.map(render)}
      </select>
    );
  }

  return (
    <Field render={_renderSelect} {...props} />
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

import React from 'react';
import PropTypes from 'prop-types';

import Input from '../input/Input';
import { messageInvalidNumber, messageInvalidNumberAbove, messageInvalidNumberBelow } from '../../texts/texts';
import { isNumber } from '../../utils/validate';
import { numberMask, numberUnmask } from '../../utils/mask';


export default function InputNumber({
  invalidMessage,
  invalidMessageAbove,
  invalidMessageBelow,
  setAData,
  value,
  ...props
}) {
  const { min, max } = props;
  let _invalidMessage = '';

  if (!isNumber(value)) {
    _invalidMessage = invalidMessage;
  } else if (typeof max !== 'undefined' && max < value) {
    _invalidMessage = invalidMessageAbove(max);
  } else if (typeof min !== 'undefined' && (value < min)) {
    _invalidMessage = invalidMessageBelow(min);
  }

  return (
    <Input
      invalidMessage={_invalidMessage}
      setAData={(newName, newValue) => setAData(newName, numberUnmask(newValue))}
      value={numberMask(value)}
      {...props}
    />
  );
}

InputNumber.propTypes = {
  type: PropTypes.string,
  invalidMessage: PropTypes.string,
  invalidMessageAbove: PropTypes.func,
  invalidMessageBelow: PropTypes.func
};

InputNumber.defaultProps = {
  type: 'number',
  invalidMessage: messageInvalidNumber,
  invalidMessageAbove: messageInvalidNumberAbove,
  invalidMessageBelow: messageInvalidNumberBelow
};

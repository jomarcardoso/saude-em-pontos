import React from 'react';
import { Input } from 'reactstrap';

import { SaInput } from '..';

export default function (props) {
  let newProps = { ...props };
  delete newProps.name;
  delete newProps.id;

  return (
    <SaInput {...newProps}>
      <Input
        type="text"
        name={props.name}
        id={props.id}
      />
    </SaInput>
  );
}

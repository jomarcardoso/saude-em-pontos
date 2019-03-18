import React from 'react';
import { Label, FormGroup } from 'reactstrap';

export default function (props) {
  return (
    <FormGroup className="form-group row">
      <Label className="col-form-label col-12 col-sm-2" htmlFor={props.children.props.id}>
        {props.label}
      </Label>
      <div className="col-12 col-sm-10 d-flex align-items-center">
        {props.children}
      </div>
    </FormGroup>
  )
}

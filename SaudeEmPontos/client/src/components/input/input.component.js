import React from 'react';

export default function (props) {
  return (
    <div className="form-group row" key>
      <label className="col-form-label col-12 col-sm-2" forhtml={props.input.id}>
        {props.label}
      </label>
      <div className="col-12 col-sm-10 d-flex align-items-center">
        {props.input}
      </div>
    </div>
  )
}

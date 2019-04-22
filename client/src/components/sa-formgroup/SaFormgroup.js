import React from 'react';
import { FormGroup, Label, Alert, Row, Col } from 'reactstrap';

/**
 * @param {*} props
 * @description https://reactpatterns.com/#merge-destructured-props-with-other-values
 */
export default function SaFormGroup({
  className,
  children,
  renderInput,
  error,
  visibleError,
  ...props
}) {
  const classNames = ['form-group', className].join(' ');

  return (
    <FormGroup className={classNames} {...props}>
      <Row>
        <Label className="col-form-label col-12 col-sm-4">
          {children}
        </Label>
        <div className="col-12 col-sm-8 d-flex align-items-center">
          {renderInput && renderInput()}
        </div>
      </Row>
      <Row className={!visibleError ? 'hide' : ''}>
        <Col>
          <Alert color="danger">
            {error ? error : '_'}
          </Alert>
        </Col>
      </Row>
    </FormGroup>
  );
}
SaFormGroup.defaultProps = {
  className: ''
};

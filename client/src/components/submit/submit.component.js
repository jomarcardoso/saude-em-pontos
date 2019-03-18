import React from 'react';
import { Row, Col, Button, Tooltip } from 'reactstrap';

export default function Submit (props) {
  const {
    toggleTooltip,
    tooltipOpened,
    tooltipMessage = '',
    disabled,
    children
  } = props;

  return (
    <Row>
      <Col className="form-group">
        <Tooltip isOpen={tooltipOpened} target="submit" toggle={toggleTooltip}>
          {tooltipMessage}
        </Tooltip>
        <Button
          id="submit"
          className="w-100"
          type="submit"
          disabled={disabled}
        >
          { children ? children : 'Enviar' }
        </Button>
      </Col>
    </Row>
  );
}

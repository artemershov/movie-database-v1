import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Button from 'reactstrap/lib/Button';

const Controls = props => (
  <Row className={props.className} noGutters>
    <Col className="pr-2">
      <Button color={props.color} outline block onClick={props.edit}>
        Edit
      </Button>
    </Col>
    <Col className="pl-2">
      <Button color={props.color} outline block onClick={props.remove}>
        Remove
      </Button>
    </Col>
  </Row>
);

export default Controls;

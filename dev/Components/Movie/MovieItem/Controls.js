import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Button from 'reactstrap/lib/Button';

const Controls = ({ className, color, edit, remove }) => (
  <Row className={className} noGutters>
    <Col className="pr-2">
      <Button color={color} outline block onClick={edit}>
        Edit
      </Button>
    </Col>
    <Col className="pl-2">
      <Button color={color} outline block onClick={remove}>
        Remove
      </Button>
    </Col>
  </Row>
);

export default Controls;

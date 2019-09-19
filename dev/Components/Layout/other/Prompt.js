import React from 'react';
import Modal from 'reactstrap/lib/Modal';
import ModalBody from 'reactstrap/lib/ModalBody';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Button from 'reactstrap/lib/Button';

const Prompt = ({ open, toggle, title, reject, resolve }) => (
  <Modal isOpen={open} toggle={toggle} size="sm">
    <ModalBody className="text-center">
      <h4 className="mb-3">{title}</h4>
      <Row noGutters>
        <Col className="pr-2">
          <Button color="dark" block outline onClick={reject}>
            Cancel
          </Button>
        </Col>
        <Col className="pl-2">
          <Button color="dark" block outline onClick={resolve}>
            Yes
          </Button>
        </Col>
      </Row>
    </ModalBody>
  </Modal>
);

export default Prompt;

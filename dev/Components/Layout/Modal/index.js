import React from 'react';
import { MovieModal, MovieModalHeader, MovieModalBody } from './Styles';

const paddingFix = () => document.body.removeAttribute('style');

const Modal = props => (
  <MovieModal
    isOpen={props.open}
    toggle={props.toggle}
    size="xl"
    onOpened={paddingFix}
    onClosed={paddingFix}>
    <MovieModalHeader toggle={props.toggle}>{props.title}</MovieModalHeader>
    <MovieModalBody>{props.children}</MovieModalBody>
  </MovieModal>
);

export default Modal;

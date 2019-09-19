import React from 'react';
import { MovieModal, MovieModalHeader, MovieModalBody } from './Styles';

const paddingFix = () => document.body.removeAttribute('style');

const Modal = ({ open, toggle, title, children }) => (
  <MovieModal
    isOpen={open}
    toggle={toggle}
    size="xl"
    onOpened={paddingFix}
    onClosed={paddingFix}>
    <MovieModalHeader toggle={toggle}>{title}</MovieModalHeader>
    <MovieModalBody>{children}</MovieModalBody>
  </MovieModal>
);

export default Modal;

import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';
import { gradient } from '../other/Styles';
import styled from 'styled-components';

const MovieModal = styled(Modal)`
  @media (min-width: 576px) {
    max-width: calc(100% - (1.75rem * 2));
  }
  @media (min-width: 992px) {
    max-width: calc(100% - (1.75rem * 2));
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  .modal-content {
    overflow: hidden;
    background: transparent;
  }
`;

const MovieModalHeader = styled(ModalHeader)`
  ${gradient}
  border: none;
  color: #fff;
  .close {
    color: #fff;
    text-shadow: none;
  }
`;

const MovieModalBody = styled(ModalBody)`
  background: #fff;
`;

export { MovieModal, MovieModalHeader, MovieModalBody };

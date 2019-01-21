import React from 'react';
import Cover from './Cover';
import { fillBlock } from './Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons/faCircleNotch';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  ${fillBlock}
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => (
  <LoadingContainer>
    <FontAwesomeIcon
      className="text-white"
      icon={faCircleNotch}
      size="3x"
      spin
    />
    <Cover />
  </LoadingContainer>
);

export default Loading;

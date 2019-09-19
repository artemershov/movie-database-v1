import { connect } from 'react-redux';
import { fillBlock, gradient } from './Styles';
import React from 'react';
import styled from 'styled-components';

const CoverContainer = styled.div`
  ${fillBlock}
  position: fixed;
  z-index: -1;
`;

const CoverBG = styled.div`
  ${fillBlock}
  ${gradient}
  opacity: 0.8;
`;

const CoverImg = styled.div`
  ${fillBlock}
  background-color: #000;
  background-size: cover;
  background-position: center 30%;
  transition: all 0.2s;
`;

const Cover = ({ src }) => (
  <CoverContainer>
    <CoverImg style={src && { backgroundImage: `url(${src})` }} />
    <CoverBG />
  </CoverContainer>
);

const mapState = state => ({ src: state.cover });
export default connect(mapState)(Cover);

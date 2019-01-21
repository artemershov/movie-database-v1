import { fillBlock, gradient } from '../../Layout/other/Styles';
import styled from 'styled-components';

const PosterBody = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s;
  padding-bottom: 150%;
`;

const PosterImg = styled.div`
  ${fillBlock}
  ${gradient}
  background-size: cover;
  background-position: center;
`;

const PosterPlaceholder = styled.div`
  ${fillBlock}
  ${gradient}
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export { PosterBody, PosterImg, PosterPlaceholder };

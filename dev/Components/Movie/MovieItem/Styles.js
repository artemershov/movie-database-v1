import { fillBlock } from '../../Layout/other/Styles';
import styled from 'styled-components';

const MovieBody = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
  :hover {
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.7);
    transform: scale(1.02);
    z-index: 10;
  }
`;

const MovieData = styled.div`
  ${fillBlock}
  display: none;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  ${MovieBody}:hover & {
    display: flex;
  }
`;

export { MovieBody, MovieData };

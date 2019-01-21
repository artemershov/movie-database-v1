import Navbar from 'reactstrap/lib/Navbar';
import Input from 'reactstrap/lib/Input';
import styled from 'styled-components';

const HeaderBar = styled(Navbar)`
  background: rgba(0, 0, 0, 0.5);
`;

const HeaderInput = styled(Input)`
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  &:active,
  &:focus {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(0, 0, 0, 0.6);
    box-shadow: none;
    color: #fff;
  }
`;

export { HeaderBar, HeaderInput };

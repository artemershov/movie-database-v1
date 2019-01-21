import React from 'react';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Button from 'reactstrap/lib/Button';
import Logo from './Logo';
import { HeaderBar, HeaderInput } from './Styles';

const Header = props => (
  <HeaderBar className="d-block mb-4 shadow" dark expand="xs">
    <div>
      <Container>
        <Row>
          <Col xs="6" sm="3">
            <NavbarBrand href="/">
              <Logo />
            </NavbarBrand>
          </Col>
          <Col sm="6" className="d-none d-sm-block">
            <HeaderInput
              onChange={props.handleSearchInput}
              value={props.search}
              placeholder="Search"
            />
          </Col>
          <Col xs="6" sm="3" className="text-right">
            <Button color="light" outline onClick={props.handleAddButton}>
              Add movie
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  </HeaderBar>
);

export default Header;

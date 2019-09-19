import React from 'react';
import { connect } from 'react-redux';
import actions from '../../../Redux/app';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Button from 'reactstrap/lib/Button';
import Logo from './Logo';
import { HeaderBar, HeaderInput } from './Styles';

const Header = ({ handleSearch, search, showForm }) => (
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
              onChange={handleSearch}
              value={search}
              placeholder="Search"
            />
          </Col>
          <Col xs="6" sm="3" className="text-right">
            <Button color="light" outline onClick={showForm}>
              Add movie
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  </HeaderBar>
);

const mapState = state => ({ search: state.search.query });
const mapDispatch = dispatch => ({
  showForm: () => dispatch(actions.edit(null)),
  handleSearch: e => dispatch(actions.search(e.target.value)),
});
export default connect(
  mapState,
  mapDispatch
)(Header);

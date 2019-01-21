import React, { Fragment } from 'react';
import Container from 'reactstrap/lib/Container';
import Cover from './other/Cover';
import Header from './Header';
import MovieContainer from '../Movie';

export default class Layout extends React.Component {
  state = {
    search: '',
    bg: null,
  };

  handleSearchInput = e => {
    const query = e.target.value;
    this.props.actions.search(query);
    this.setState({ search: query });
  };
  handleCardHover = src => this.setState({ bg: src });
  handleAddButton = () => this.props.actions.edit(null);

  render = () => (
    <Fragment>
      <Header
        search={this.state.search}
        handleSearchInput={this.handleSearchInput}
        handleAddButton={this.handleAddButton}
      />
      <Container>
        <MovieContainer
          data={this.props.data}
          isSearch={this.props.isSearch}
          search={this.state.search}
          hover={this.handleCardHover}
          actions={this.props.actions}
        />
      </Container>
      <Cover src={this.state.bg} />
    </Fragment>
  );
}

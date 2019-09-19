import React, { Fragment } from 'react';
import { RowXS } from '../Layout/other/Row';
import Col from 'reactstrap/lib/Col';
import MovieItem from './MovieItem';
import { Title } from './other/Styles';
import Pagination from './other/Pagination';

export default class MovieContainer extends React.Component {
  state = {
    page: 1,
    data: null,
  };
  itemsOnPage = 12;

  getData = () => {
    const data = this.props.data.slice(
      (this.state.page - 1) * this.itemsOnPage,
      this.state.page * this.itemsOnPage
    );
    return this.props.actions
      .loadData(data)
      .then(() => this.setState({ data }));
  };
  setPage = page => {
    window.scroll(0, 0);
    this.setState({ page }, this.getData);
  };

  componentDidUpdate = prevPorps => {
    if (prevPorps.data !== this.props.data) this.getData();
  };

  render = () => {
    const data = this.props.isSearch ? this.props.data : this.state.data;
    const total = Math.ceil(this.props.data.length / this.itemsOnPage);
    const title = this.props.search
      ? 'Search: ' + this.props.search
      : 'IMDB Top 250';
    return (
      <Fragment>
        <Title className="text-white mb-4">{title}</Title>
        <RowXS className="mb-4" noGutters>
          {data &&
            data.map((el, idx) => (
              <Col xs="12" sm="6" md="4" lg="3" key={idx}>
                <MovieItem
                  className="mb-3"
                  data={el}
                  hover={this.props.hover}
                  isEditable={!this.props.isSearch}
                  actions={this.props.actions}
                />
              </Col>
            ))}
        </RowXS>
        {total > this.itemsOnPage && (
          <Pagination
            className="d-block text-center mb-4"
            current={this.state.page}
            total={total}
            visible="5"
            change={this.setPage}
          />
        )}
      </Fragment>
    );
  };
}

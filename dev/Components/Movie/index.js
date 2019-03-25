import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { actions as loadingActions } from '../../Redux/loading';
import { RowXS } from '../Layout/other/Row';
import Col from 'reactstrap/lib/Col';
import MovieItem from './MovieItem';
import { Title } from './other/Styles';
import Pagination from './other/Pagination';

class MovieContainer extends React.Component {
  state = { page: 1, data: null };

  itemsOnPage = 12;

  getData = () => {
    const { dispatch } = this.props;
    const data = this.props.data.slice(
      (this.state.page - 1) * this.itemsOnPage,
      this.state.page * this.itemsOnPage
    );
    dispatch(loadingActions.set(true));
    const promises = data.map(el => el.getData && el.getData());
    Promise.all(promises).then(() => {
      dispatch(loadingActions.set(false));
      this.setState({ data });
    });
  };

  setPage = page => {
    window.scroll(0, 0);
    this.setState({ page }, this.getData);
  };

  componentDidMount = () => this.getData();

  componentDidUpdate = prevPorps => {
    if (prevPorps.data !== this.props.data) this.getData();
  };

  render = () => {
    const { data, search } = this.props;
    const page = search.query ? search.data : this.state.data;
    const total = Math.ceil(data.length / this.itemsOnPage);
    const title = search.query ? 'Search: ' + search.query : 'IMDB Top 250';
    return (
      <Fragment>
        <Title className="text-white mb-4">{title}</Title>
        <RowXS className="mb-4" noGutters>
          {page &&
            page.map(el => (
              <Col xs="12" sm="6" md="4" lg="3" key={el.id || el.imdbID}>
                {/* TODO: Remove Date.now key */}
                <MovieItem className="mb-3" data={el} key={Date.now()} />
              </Col>
            ))}
        </RowXS>
        {!search.query && total > 1 && (
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

const mapState = state => ({
  data: state.data.list,
  search: state.search,
});
export default connect(mapState)(MovieContainer);

import React from 'react';
import { connect } from 'react-redux';
import actions from '../../../Redux/app';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Badge from 'reactstrap/lib/Badge';
import Controls from '../MovieItem/Controls';
import Poster from '../Poster';
import Rating from './Rating';
import { Title, LeadText } from '../other/Styles';

const formatRuntime = min =>
  min % 60
    ? `${Math.floor(min / 60)}h ${min % 60}min`
    : `${Math.floor(min / 60)}h`;

const MovieView = ({ data = null, edit, remove, isSearch }) => {
  if (data) {
    const badges = [
      data.year,
      formatRuntime(data.runtime),
      ...data.genre.split(', '),
    ];
    const table = {
      Production: data.production,
      Country: data.country,
      Director: data.director,
      Writer: data.writer,
      Actors: data.actors,
      Awards: data.awards,
    };
    return (
      <Row>
        <Col xs="12" sm="4">
          <Poster className="mb-3" src={data.poster} />
          {!isSearch && (
            <Controls
              className="mb-3"
              color="dark"
              edit={() => edit(data)}
              remove={() => remove(data.id)}
            />
          )}
        </Col>
        <Col xs="12" sm="8">
          <Title>{data.title}</Title>
          <LeadText className="my-2">
            <Rating className="text-warning mr-2" rating={data.imdbRating} />
            {data.imdbRating} / 10
          </LeadText>
          <div className="lead">{data.plot}</div>
          <div className="my-3 mb-4">
            {badges.map((el, idx) => (
              <Badge className="mr-2" color="success" key={idx}>
                {el}
              </Badge>
            ))}
          </div>
          <table className="table small">
            <tbody>
              {Object.keys(table).map((k, idx) => (
                <tr key={idx}>
                  <th>{k}</th>
                  <td>{table[k]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    );
  } else {
    return 'No data';
  }
};

const mapState = state => ({
  data: state.modal.view.data,
  isSearch: Boolean(state.search.query),
});
const mapDispatch = dispatch => ({
  edit: data => dispatch(actions.edit(data)),
  remove: id => dispatch(actions.remove(id)),
});
export default connect(
  mapState,
  mapDispatch
)(MovieView);

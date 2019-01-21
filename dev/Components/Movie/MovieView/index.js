import React from 'react';
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

export default class MovieViewContainer extends React.Component {
  edit = () => this.props.actions.edit(this.props.data);
  remove = () => this.props.actions.remove(this.props.data.id);
  render = () => {
    if (this.props.data) {
      const data = this.props.data;
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
            {this.props.isEditable && (
              <Controls
                className="mb-3"
                color="dark"
                edit={this.edit}
                remove={this.remove}
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
}

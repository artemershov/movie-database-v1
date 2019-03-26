import React from 'react';
import { connect } from 'react-redux';
import { actions as coverActions } from '../../../Redux/cover';
import actions from '../../../Redux/app';
import Poster from '../Poster';
import { MovieBody, MovieData } from './Styles';
import Controls from './Controls';
import { filterTitle } from '../other/helper';

const MovieItem = ({ className, data, dispatch, isSearch }) => {
  const hover = () => dispatch(coverActions.set(data.poster));
  const view = () => dispatch(actions.view(data, isSearch));
  const edit = e => {
    e.stopPropagation();
    dispatch(actions.edit(data));
  };
  const remove = e => {
    e.stopPropagation();
    dispatch(actions.remove(data.id));
  };
  const title = filterTitle(data.title);
  return (
    <MovieBody className={className} onMouseEnter={hover} onClick={view}>
      <Poster src={data.poster} />
      <MovieData>
        <div>
          <h3>{title}</h3>
          <div className="lead">{data.year}</div>
        </div>
        {!isSearch && <Controls color="light" edit={edit} remove={remove} />}
      </MovieData>
    </MovieBody>
  );
};

const mapState = state => ({
  isSearch: Boolean(state.search.query),
});
export default connect(mapState)(MovieItem);

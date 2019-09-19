import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Container from 'reactstrap/lib/Container';
import Cover from './Layout/other/Cover';
import Header from './Layout/Header';
import Modal from './Layout/Modal';
import Prompt from './Layout/other/Prompt';
import Loading from './Layout/other/Loading';
import MovieContainer from './Movie';
import MovieForm from './Movie/MovieForm';
import MovieView from './Movie/MovieView';
import { actions as modalActions } from '../Redux/modal';

const Layout = ({ modal, closeView, closeForm, closePrompt, loading }) => (
  <Fragment>
    {loading && <Loading />}
    <Header />
    <Container>
      <MovieContainer />
    </Container>
    <Cover />
    <Modal open={modal.view.show} toggle={closeView} title="Movie view">
      <MovieView />
    </Modal>
    <Modal
      open={modal.form.show}
      toggle={closeForm}
      title={modal.form.data ? 'Edit form' : 'Add form'}>
      <MovieForm cancel={closeForm} />
    </Modal>
    <Prompt
      open={modal.prompt.show}
      toggle={closePrompt}
      title="Do you really want to delete this movie?"
      {...modal.prompt.data}
    />
  </Fragment>
);

const mapState = state => ({
  modal: state.modal,
  loading: state.loading,
});
const mapDispatch = dispatch => ({
  closeView: () => dispatch(modalActions.hide('view')),
  closeForm: () => dispatch(modalActions.hide('form')),
  closePrompt: () => dispatch(modalActions.hide('prompt')),
});
export default connect(
  mapState,
  mapDispatch
)(Layout);

import React, { Fragment } from 'react';
import debounce from 'lodash/debounce';
import Layout from './Layout';
import Modal from './Layout/Modal';
import Prompt from './Layout/other/Prompt';
import MovieForm from './Movie/MovieForm';
import MovieView from './Movie/MovieView';
import Movie from '../Class/Movie';

export default class LayoutContainer extends React.Component {
  state = {
    formData: null,
    formModal: false,
    viewData: null,
    viewModal: false,
    promptModal: false,
    promptReject: null,
    promptResolve: null,
    searchData: null,
  };

  closeView = () => this.setState({ viewData: null, viewModal: false });
  closeForm = () => this.setState({ formData: null, formModal: false });
  closePrompt = () =>
    this.setState({
      promptModal: false,
      promptReject: null,
      promptResolve: null,
    });

  openView = data =>
    this.setState({
      formModal: false,
      viewData: data,
      viewModal: true,
      promptModal: false,
    });
  openForm = data =>
    this.setState({
      formData: data,
      formModal: true,
      viewModal: false,
      promptModal: false,
    });
  openPrompt = id =>
    new Promise((res, rej) => {
      this.setState({
        formModal: false,
        viewModal: false,
        promptModal: true,
        promptReject: rej,
        promptResolve: res,
      });
    })
      .then(() => this.props.listActions('remove')(id), () => {})
      .finally(this.closePrompt);

  loadView = data =>
    this.props
      .apiActions('getById')(data.imdbID)
      .then(data => this.openView(new Movie(data, true)));

  search = debounce(query => {
    if (query) {
      this.props
        .apiActions('search')(query)
        .then(
          data => {
            if (data.Response && data.Search) {
              const movies = data.Search.map(el => new Movie(el, true));
              this.setState({ searchData: movies });
            }
          },
          () => {}
        );
    } else {
      this.setState({ searchData: null });
    }
  }, 500);

  formSubmit = data => {
    if (this.state.formData) {
      this.props.listActions('edit')(this.state.formData.id, data);
      this.openView({ id: this.state.formData.id, ...data });
    } else {
      const id = this.props.listActions('add')(new Movie(data));
      this.openView({ id, ...data });
    }
  };
  formValidateTitle = title => this.props.listActions('isTitleExist')(title);

  render = () => (
    <Fragment>
      <Layout
        data={this.state.searchData || this.props.data}
        isSearch={!!this.state.searchData}
        actions={{
          loadData: this.props.loadData,
          search: this.search,
          view: this.state.searchData ? this.loadView : this.openView,
          edit: this.openForm,
          remove: this.openPrompt,
        }}
      />
      <Modal
        open={this.state.viewModal}
        toggle={this.closeView}
        title="Movie view">
        <MovieView
          data={this.state.viewData}
          isEditable={!this.state.searchData}
          actions={{
            edit: this.openForm,
            remove: this.openPrompt,
          }}
        />
      </Modal>
      <Modal
        open={this.state.formModal}
        toggle={this.closeForm}
        title={this.state.formData ? 'Edit form' : 'Add form'}>
        <MovieForm
          data={this.state.formData}
          actions={{
            validateTitle: this.formValidateTitle,
            submit: this.formSubmit,
            cancel: this.closeForm,
          }}
        />
      </Modal>
      <Prompt
        open={this.state.promptModal}
        toggle={this.closePrompt}
        title="Do you really want to delete this movie?"
        resolve={this.state.promptResolve}
        reject={this.state.promptReject}
      />
    </Fragment>
  );
}

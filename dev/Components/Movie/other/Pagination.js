import React from 'react';
import Button from 'reactstrap/lib/Button';
import ButtonGroup from 'reactstrap/lib/ButtonGroup';

export default class Pagination extends React.Component {
  moveNext = () =>
    this.props.change(
      this.props.current + 1 > this.props.total
        ? this.props.total
        : this.props.current + 1
    );
  movePrev = () =>
    this.props.change(this.props.current - 1 < 1 ? 1 : this.props.current - 1);
  moveStart = () => this.props.change(1);
  moveEnd = () => this.props.change(this.props.total);
  moveTo = e => this.props.change(e.target.dataset.page);
  buttonsArray = () => {
    const { current, total, visible } = this.props;
    const middle = Math.floor(visible / 2);
    let offset = middle;
    if (current <= middle) offset = current - 1;
    if (current > total - middle) offset = visible - (total - current + 1);
    return Array.from({ length: visible }, (el, idx) => {
      const page = current - offset + idx;
      return (
        <Button
          color="light"
          outline={page != current}
          onClick={this.moveTo}
          data-page={page}
          key={idx}>
          {page}
        </Button>
      );
    });
  };
  render = () => (
    <ButtonGroup className={this.props.className}>
      <Button color="light" outline onClick={this.moveStart}>
        &laquo;
      </Button>
      <Button color="light" outline onClick={this.movePrev}>
        Previous
      </Button>

      {this.buttonsArray()}

      <Button color="light" outline onClick={this.moveNext}>
        Next
      </Button>
      <Button color="light" outline onClick={this.moveEnd}>
        &raquo;
      </Button>
    </ButtonGroup>
  );
}

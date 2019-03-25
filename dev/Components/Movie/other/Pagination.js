import React from 'react';
import Button from 'reactstrap/lib/Button';
import ButtonGroup from 'reactstrap/lib/ButtonGroup';

const Pagination = ({ className, change, current, total, visible }) => {
  const moveNext = () => change(current + 1 > total ? total : current + 1);
  const movePrev = () => change(current - 1 < 1 ? 1 : current - 1);
  const moveStart = () => change(1);
  const moveEnd = () => change(total);
  const moveTo = e => change(e.target.dataset.page);
  const style = { color: 'light', outline: true };
  const buttonsArray = () => {
    if (visible > total) visible = total;
    const middle = Math.floor(visible / 2);
    let offset = middle;
    if (current <= middle) offset = current - 1;
    if (current > total - middle) offset = visible - (total - current + 1);
    return Array.from({ length: visible }, (el, idx) => {
      const page = current - offset + idx;
      return (
        <Button
          {...style}
          outline={page != current}
          onClick={moveTo}
          data-page={page}
          key={idx}>
          {page}
        </Button>
      );
    });
  };
  return (
    <ButtonGroup className={className}>
      <Button {...style} onClick={moveStart}>
        &laquo;
      </Button>
      <Button {...style} onClick={movePrev}>
        Previous
      </Button>

      {buttonsArray()}

      <Button {...style} onClick={moveNext}>
        Next
      </Button>
      <Button {...style} onClick={moveEnd}>
        &raquo;
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;

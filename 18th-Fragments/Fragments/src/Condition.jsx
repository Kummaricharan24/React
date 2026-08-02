import { Fragment } from 'react';

function Condition(props) {
  return (
    <Fragment>
      {props.items.length === 0 && <h3>im waiting for Food</h3>}
    </Fragment>
  );
}

export { Condition };
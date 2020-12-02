import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  (
    <Fragment>
      <div>
        1) change the name of the
        <span>storybook</span>
        folder to
        <span>.storybook</span>
      </div>
      <div>
        2) run
        <span>yarn storybook</span>
        in the console to load storybook
      </div>
    </Fragment>
  ),
  document.getElementById('root'),
);

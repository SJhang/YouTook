import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
require('../stylesheets/application.scss');

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});

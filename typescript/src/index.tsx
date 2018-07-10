import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

import './style.css';
import { getInitialSnake } from './components/common/util';

ReactDOM.render(
  <App row={25} col={25} score={10} highScore={100} snake={getInitialSnake()} apple={{ row: 0, col: 0 }} />,
  document.getElementById('root'),
);

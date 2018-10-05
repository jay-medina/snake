import React from 'react';
import ReactDOM from 'react-dom';
import { Paint } from './paint';

export function createGame() {
  ReactDOM.render(<Paint />, document.getElementById('root'));
}

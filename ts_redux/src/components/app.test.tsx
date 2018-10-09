import React from 'react';
import ReactDOM from 'react-dom';
import { createGame } from './app';
import { Paint } from './paint/Paint';

jest.mock('react-dom', () => ({
  render: jest.fn(),
}));

describe('createGame', () => {
  beforeEach(() => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    createGame();
  });

  it('paints the game to the DOM node', () => {
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <Paint />,
      document.getElementById('root'),
    );
  });
});

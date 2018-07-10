import React from 'react';
import ScoreBoard from '../scoreboard/Scoreboard';
import Board from '../board/Board';

export interface AppProps {}

const App: React.StatelessComponent<AppProps> = (props) => (
  <div className="snake__app">
    <ScoreBoard score={0} highScore={10} />
    <Board />
  </div>
);

export default App;

import React, { SFC } from 'react';
import { connect } from 'react-redux';
import { startGame } from '../store/actions';
import { MapDispatchToProps, MapStateToProps } from '../store/types';
import { GameState } from '../store/util';
import { PlayButton } from './PlayButton';

interface StartProps {
  onPlayClick(): void;
}

interface StateProps {
  gameState: GameState;
}

interface DispatchProps {
  onPlayClick(): void;
}

type TransitionScreenProps = StateProps & DispatchProps;

const Start = ({ onPlayClick }: StartProps) => (
  <div className="snake__start-screen">
    <div className="snake__start-screen-title">Snake</div>
    <PlayButton onClick={onPlayClick} />
  </div>
);

const GameOver = ({ onPlayClick }: StartProps) => {
  return (
    <div className="snake__game-over-screen">
      <div className="snake__game-over-title">Game Over</div>
      <PlayButton onClick={onPlayClick} />
    </div>
  );
};

export const TransitionScreen: SFC<TransitionScreenProps> = ({
  gameState,
  onPlayClick,
}) => {
  if (gameState === GameState.Start) {
    return <Start onPlayClick={onPlayClick} />;
  }
  if (gameState === GameState.GameOver) {
    return <GameOver onPlayClick={onPlayClick} />;
  }

  return null;
};

TransitionScreen.displayName = 'TransitionScreen';

const mapDispatchToProps: MapDispatchToProps<DispatchProps> = (dispatch) => {
  return {
    onPlayClick: () => {
      dispatch(startGame());
    },
  };
};
const mapStateToProps: MapStateToProps<StateProps> = (state) => {
  return {
    gameState: state.gameState,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransitionScreen);

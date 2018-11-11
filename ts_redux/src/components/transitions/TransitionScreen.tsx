import React, { SFC } from 'react';
import { connect } from 'react-redux';
import { startGame } from '../store/actions';
import { MapDispatchToProps, MapStateToProps } from '../store/types';
import { GameState } from '../store/util';
import { GameOver, Start } from './Screens';

interface StateProps {
  gameState: GameState;
}

interface DispatchProps {
  onPlayClick(): void;
}

type Props = StateProps & DispatchProps;

export const TransitionScreen: SFC<Props> = ({ gameState, onPlayClick }) => {
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

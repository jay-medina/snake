import React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../../store/actions';
import { DTP, STP } from '../../store/types';
import { GameState } from '../../store/util';
import { GameOver, Start } from './Screens';

interface StateProps {
  gameState: GameState;
}

interface DispatchProps {
  onPlayClick(): void;
}

type Props = StateProps & DispatchProps;

function TransitionScreen({ gameState, onPlayClick }: Props) {
  if (gameState === GameState.Start) {
    return <Start onPlayClick={onPlayClick} />;
  }
  if (gameState === GameState.GameOver) {
    return <GameOver onPlayClick={onPlayClick} />;
  }

  return null;
}

const mapDispatchToProps: DTP<DispatchProps> = (dispatch) => {
  return {
    onPlayClick: () => {
      dispatch(startGame());
    },
  };
};

const mapStateToProps: STP<StateProps> = (state) => ({
  gameState: state.gameState,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransitionScreen);

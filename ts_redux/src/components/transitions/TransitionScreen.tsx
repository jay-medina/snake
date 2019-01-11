import React from 'react';
import { connect } from 'react-redux';
import { startGameThunk } from '../../store/actions';
import { DTP, STP, GameState } from '../../common/types';
import { GameOver, Start } from './Screens';

interface StateProps {
  gameState: GameState;
}

interface DispatchProps {
  onPlayClick(): void;
}

type Props = StateProps & DispatchProps;

function TransitionScreen({ gameState, onPlayClick }: Props) {
  if (gameState === 'Start') {
    return <Start onPlayClick={onPlayClick} />;
  }
  if (gameState === 'GameOver') {
    return <GameOver onPlayClick={onPlayClick} />;
  }

  return null;
}

const mapDispatchToProps: DTP<DispatchProps> = (dispatch) => {
  return {
    onPlayClick: () => {
      dispatch(startGameThunk());
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

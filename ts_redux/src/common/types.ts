import { MapStateToProps as MSTP } from 'react-redux';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { AppAction } from '../store/actions';
import { Store } from 'redux';

export type GameThunkAction = ThunkAction<void, AppState, {}, AppAction>;

export type GameThunkDispatch = ThunkDispatch<AppState, {}, AppAction>;

export type DTP<DispatchProps, OwnProps = {}> = (
  dispatch: GameThunkDispatch,
  ownProps: OwnProps,
) => DispatchProps;

export type STP<StateProps, OwnProps = {}> = MSTP<StateProps, OwnProps, AppState>;

export type GameStore = Store<AppState, AppAction> & {
  dispatch: GameThunkDispatch;
};

export type GameState = 'Start' | 'Run' | 'GameOver';

export interface AppState {
  gameState: GameState;
  apple: Apple;
  snake: Snake;
  dimensions: {
    rows: number;
    cols: number;
  };
  score: Score;
}

export interface GridItem {
  row: number;
  col: number;
}

export type Apple = GridItem;

export type Direction = 'left' | 'right' | 'up' | 'down';

export interface Score {
  current: number;
  high: number;
}

export interface Snake {
  body: GridItem[];
  incrementTimer: number;
  lastTimestamp: number;
  direction: Direction;
  newDirection?: Direction;
}

export type TimeStamp = number;

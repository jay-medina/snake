import { MapStateToProps as MSTP } from 'react-redux';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { AppAction } from '../store/actions';

export type GameThunkAction = ThunkAction<void, AppState, {}, AppAction>;

export type GameThunkDispatch = ThunkDispatch<AppState, {}, AppAction>;

export type DTP<DispatchProps, OwnProps = {}> = (
  dispatch: GameThunkDispatch,
  ownProps: OwnProps,
) => DispatchProps;

export type STP<StateProps, OwnProps = {}> = MSTP<StateProps, OwnProps, AppState>;

export enum GameState {
  Start,
  Run,
  GameOver,
}

export interface AppState {
  gameState: GameState;
  apple: Apple;
  snake: Snake;
  dimensions: {
    rows: number;
    cols: number;
  };
}

export interface GridItem {
  row: number;
  col: number;
}

export type Apple = GridItem;

export type Snake = GridItem[];

import { MapStateToProps as MSTP } from 'react-redux';
import { AppState } from './util';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { AppAction } from './actions';

export type GameThunkAction = ThunkAction<void, AppState, {}, AppAction>;

export type GameThunkDispatch = ThunkDispatch<AppState, {}, AppAction>;

export type DTP<DispatchProps, OwnProps = {}> = (
  dispatch: GameThunkDispatch,
  ownProps: OwnProps,
) => DispatchProps;

export type STP<StateProps, OwnProps = {}> = MSTP<StateProps, OwnProps, AppState>;

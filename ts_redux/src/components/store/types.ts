import {
  MapDispatchToProps as MDTP,
  MapStateToProps as MSTP,
} from 'react-redux';
import { AppState } from './util';

export type MapDispatchToProps<DispatchProps, OwnProps = {}> = MDTP<
  DispatchProps,
  OwnProps
>;

export type MapStateToProps<StateProps, OwnProps = {}> = MSTP<
  StateProps,
  OwnProps,
  AppState
>;

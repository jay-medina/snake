import {
  MapDispatchToProps as MDTP,
  MapStateToProps as MSTP,
} from 'react-redux';
import { AppState } from './util';

export type DTP<DispatchProps, OwnProps = {}> = MDTP<
  DispatchProps,
  OwnProps
>;

export type STP<StateProps, OwnProps = {}> = MSTP<
  StateProps,
  OwnProps,
  AppState
>;

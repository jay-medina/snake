import React, { useEffect } from 'react';
import { Direction, DTP } from '../../common/types';
import { connect } from 'react-redux';
import { updateSnakeDirection } from '../../store/actions';

const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;
const A = 65;
const W = 87;
const D = 68;
const S = 83;

/**
 * Maps the keycode to directions
 */
const mapArrowKeysToDirection = (keyCode: number): Direction | null => {
  switch (keyCode) {
    case LEFT:
    case A:
      return 'left';
    case UP:
    case W:
      return 'up';
    case RIGHT:
    case D:
      return 'right';
    case DOWN:
    case S:
      return 'down';
    default:
      return null;
  }
};

interface KeyboardProps {
  onDirectionChange(direction: Direction): void;
}

const Keyboard: React.FC<KeyboardProps> = (props) => {
  function onKeyDown(e: KeyboardEvent) {
    const newDirection = mapArrowKeysToDirection(e.keyCode);

    if (newDirection) {
      props.onDirectionChange(newDirection);
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return <>{props.children}</>;
};

const dtp: DTP<KeyboardProps> = (dispatch) => ({
  onDirectionChange(direction) {
    dispatch(updateSnakeDirection(direction));
  },
});

export default connect(
  null,
  dtp,
)(Keyboard);

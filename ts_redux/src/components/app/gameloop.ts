import { Store } from 'redux';
import { AppState, TimeStamp } from '../../common/types';
import { AppAction } from '../../store/actions';

function tick(store: Store<AppState, AppAction>, timestamp: TimeStamp) {
  store.dispatch({
    type: 'TICK_TIME',
    payload: {
      timestamp,
    },
  });
}

function loop(store: Store<AppState, AppAction>) {
  function step(timestamp: TimeStamp) {
    tick(store, timestamp);

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export function startLoop(store: Store<AppState, AppAction>) {
  let started = false;

  const gameloop = () => {
    if (started) return;

    started = true;

    loop(store);
  };

  store.subscribe(gameloop);
}

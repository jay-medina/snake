import { TimeStamp, GameStore } from '../../common/types';
import { tickForwardThunk } from '../../store/actions';

function loop(store: GameStore) {
  function step(timestamp: TimeStamp) {
    const state = store.getState();
    
    if(state.gameState !== 'GameOver') {
      store.dispatch(tickForwardThunk(timestamp));
      requestAnimationFrame(step);
    }

  }

  requestAnimationFrame(step);
}

export function startLoop(store: GameStore) {
  let started = false;

  const gameloop = () => {
    const state = store.getState()

    if (state.gameState === 'GameOver') {
      started = false;
      return;
    }

    if (started) return;

    started = true;

    loop(store);
  };

  store.subscribe(gameloop);
}

interface GameAction {
  type: 'START_GAME';
}

export type AppAction = GameAction;

export const startGame = () => ({
  type: 'START_GAME',
});

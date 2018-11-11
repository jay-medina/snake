interface GameAction {
  type: 'START_GAME';
}

export type AppAction = GameAction;

export const startGame = (): GameAction => ({
  type: 'START_GAME',
});

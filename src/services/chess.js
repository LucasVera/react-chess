// Everything that's got to do with chess.js library

import { ChessInstance } from 'chess.js';
import Chess from 'chess.js/chess';

export const startNewGame = () => {
  const game = Chess();

  return game;
}

/**
 * Plays a game of chess doing random (legal) moves
 * @param {ChessInstance} game - Instance of the current game
 */
export const playRandomGame = (game, maxMoves = 200) => {
  let n = 0
  while (!game.game_over() && n < maxMoves) {
    playRandomMove(game);
    n++
  }

  console.log('board', game.board());
  console.log('ascii', game.ascii());

  return game;
}

/**
 * Plays a random move from all available moves for the current position in the game
 * @param {ChessInstance} game - Instance of the current game
 */
export const playRandomMove = (game) => {
  const moves = game.moves();
  const move = moves[Math.floor(Math.random() * moves.length)];
  game.move(move);
  return game;
}

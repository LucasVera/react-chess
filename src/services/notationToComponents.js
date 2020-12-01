import { ChessInstance } from 'chess.js';
import { Colors, Pieces, PieceSvgs } from './constants';

const getSvgFromNotation = (notation) => {
  if (!notation || !notation.type) {
    // this means nothing is on the square
    return null;
  }

  const { color, type } = notation;
  let pieceSvgUrl;
  switch (type) {
    case Pieces.KING:
      pieceSvgUrl = color === Colors.BLACK
        ? PieceSvgs.BLACK_KING
        : PieceSvgs.WHITE_KING;
      break;
    case Pieces.QUEEN:
      pieceSvgUrl = color === Colors.BLACK
        ? PieceSvgs.BLACK_QUEEN
        : PieceSvgs.WHITE_QUEEN;
      break;
    case Pieces.ROOK:
      pieceSvgUrl = color === Colors.BLACK
        ? PieceSvgs.BLACK_ROOK
        : PieceSvgs.WHITE_ROOK;
      break;
    case Pieces.BISHOP:
      pieceSvgUrl = color === Colors.BLACK
        ? PieceSvgs.BLACK_BISHOP
        : PieceSvgs.WHITE_BISHOP;
      break;
    case Pieces.KNIGHT:
      pieceSvgUrl = color === Colors.BLACK
        ? PieceSvgs.BLACK_KNIGHT
        : PieceSvgs.WHITE_KNIGHT;
      break;
    case Pieces.PAWN:
      pieceSvgUrl = color === Colors.BLACK
        ? PieceSvgs.BLACK_PAWN
        : PieceSvgs.WHITE_PAWN;
      break;
  }

  return pieceSvgUrl;
}

/**
 * Translates the current's game position to components to show in the UI
 * @param {Array} initialRows - Rows of the board
 * @param {ChessInstance} game - Instance of the current game
 */
export const getBoardPieces = (initialRows, game) => {
  if (!game || !initialRows || typeof game.board !== 'function') {
    return initialRows;
  }
  const gameBoard = game.board();
  // start backwards for to match initialRows
  for (let i = gameBoard.length - 1; i >= 0; i--) {
    console.log('i', i)
    const gameRow = gameBoard[i];
    const boardRow = initialRows[i];
    for (let j = 0; j < gameRow.length; j++) {
      const gameSquare = gameRow[j];
      const boardSquare = boardRow[j];
      boardSquare.pieceSvgUrl = getSvgFromNotation(gameSquare);
    }
  }

  return initialRows;
}

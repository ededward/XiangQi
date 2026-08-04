import type { Piece } from "../../types/Piece";
import { positionToRowCol, rowColToPosition } from "../../utils/board";
import { ROWS, COLS } from "../../data/boardConstants";

export function getCannonMoves(piece: Piece, pieces: Piece[]): number[] {
  const moves: number[] = [];
  const { row, col } = positionToRowCol(piece.position);

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (const [rowStep, colStep] of directions) {
    let newRow = row + rowStep;
    let newCol = col + colStep;
    let screenFound = false;

    while (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS) {
      const newPosition = rowColToPosition(newRow, newCol);
      const blockingPiece = pieces.find(p => p.position === newPosition);

      if (!screenFound && !blockingPiece) {
        moves.push(newPosition);
      } else if (screenFound && blockingPiece) {
        if (blockingPiece.side !== piece.side) {
          moves.push(newPosition);
        }
        break;
      } else if (blockingPiece) {
        screenFound = true;
      }

      newRow += rowStep;
      newCol += colStep;
    }
  }

  return moves;
}
import type { Piece } from "../../types/Piece";
import { positionToRowCol, rowColToPosition } from "../../utils/board";
import { ROWS, COLS, BLACK_PALACE, RED_PALACE } from "../../data/boardConstants";

export function getAdvisorMoves(piece: Piece, pieces: Piece[]): number[] {
  const moves: number[] = [];
  const { row, col } = positionToRowCol(piece.position);
  const destinations = 
  [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];

  for (const [rowStep, colStep] of destinations) {
    const newRow = row + rowStep;
    const newCol = col + colStep;

    if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLS) {
      continue;
    }

    const newPosition = rowColToPosition(newRow, newCol);

    if (piece.side === "black" && !BLACK_PALACE.includes(newPosition)) {
      continue;
    }

    if (piece.side === "red" && !RED_PALACE.includes(newPosition)) {
      continue;
    }
    
    const blockingPiece = pieces.find(p => p.position === newPosition);

    if(!blockingPiece) {
      moves.push(newPosition);
    } else if (blockingPiece.side !== piece.side) {
      moves.push(newPosition);
    }
  }

  return moves;
}
import type { Piece } from "../../types/Piece";
import { positionToRowCol, rowColToPosition } from "../../utils/board";
import { ROWS, COLS } from "../../data/boardConstants";
import { isInPalace } from "../rules/palace";

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

    if (!isInPalace(piece.side, newPosition)) {
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
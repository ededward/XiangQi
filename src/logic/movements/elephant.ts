import type { Piece } from "../../types/Piece";
import { positionToRowCol, rowColToPosition } from "../../utils/board";
import { ROWS, COLS, BLACK_RIVER_ROW, RED_RIVER_ROW } from "../../data/boardConstants";

export function getElephantMoves(piece: Piece, pieces: Piece[]): number[] {
  const moves: number[] = [];
  const { row, col } = positionToRowCol(piece.position);
  const destinations = 
  [
    {
      move: [-2, -2],
      leg: [-1, -1],
    },
    {
      move: [-2, 2],
      leg: [-1, 1],
    },
    {
      move: [2, -2],
      leg: [1, -1],
    },
    {
      move: [2, 2],
      leg: [1, 1],
    },
  ];

  for (const { move: [rowStep, colStep], leg: [legRowStep, legColStep] } of destinations) {
    const legRow = row + legRowStep;
    const legCol = col + legColStep;
    const newRow = row + rowStep;
    const newCol = col + colStep;

    if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLS) {
      continue;
    }

    if (piece.side === "black" && newRow > BLACK_RIVER_ROW) {
      continue;
    }

    if (piece.side === "red" && newRow < RED_RIVER_ROW) {
      continue;
    }
    
    const legPosition = rowColToPosition(legRow, legCol);
    const newPosition = rowColToPosition(newRow, newCol);
    const blockingLegPiece = pieces.find(p => p.position === legPosition);
    const blockingPiece = pieces.find(p => p.position === newPosition);

    if (blockingLegPiece) {
      continue;
    } else if(!blockingPiece) {
      moves.push(newPosition);
    } else if (blockingPiece.side !== piece.side) {
      moves.push(newPosition);
    }
  }

  return moves;
}
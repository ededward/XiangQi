import type { Piece } from "../../types/Piece";
import { positionToRowCol, rowColToPosition } from "../../utils/board";
import { ROWS, COLS } from "../../data/boardConstants";
import { isAcrossRiver } from "../rules/river";

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

    if (isAcrossRiver(piece.side, newRow)) {
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
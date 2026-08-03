import type { Piece } from "../../types/Piece";
import { positionToRowCol, rowColToPosition } from "../../utils/board";
import { ROWS, COLS } from "../../constants/board";

export function getHorseMoves(piece: Piece, pieces: Piece[]): number[] {
  const moves: number[] = [];
  const { row, col } = positionToRowCol(piece.position);

  // directions:
  // up, down, left, right
  const destinations = 
  [
    {
      move: [-2, -1],
      leg: [-1, 0],
    },
    {
      move: [-2, 1],
      leg: [-1, 0],
    },
    {
      move: [2, -1],
      leg: [1, 0],
    },
    {
      move: [2, 1],
      leg: [1, 0],
    },
    {
      move: [-1, -2],
      leg: [0, -1],
    },
    {
      move: [1, -2],
      leg: [0, -1],
    },
    {
      move: [1, 2],
      leg: [0, 1],
    },
    {
      move: [-1, 2],
      leg: [0, 1],
    },
  ];

  for (const { move: [rowStep, colStep], leg: [legRowStep, legColStep] } of destinations) {
    let legRow = row + legRowStep;
    let legCol = col + legColStep;
    let newRow = row + rowStep;
    let newCol = col + colStep;

    if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLS) {
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
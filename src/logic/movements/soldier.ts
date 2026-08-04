import type { Piece } from "../../types/Piece";
import { positionToRowCol, rowColToPosition } from "../../utils/board";
import { ROWS, COLS } from "../../data/boardConstants";
import { isAcrossRiver } from "../rules/river";

export function getSoldierMoves(piece: Piece, pieces: Piece[]): number[] {
  const moves: number[] = [];
  const { row, col } = positionToRowCol(piece.position);
  const forward = piece.side === "red" ? -1 : 1;
  const destinations: [number, number][] = [[forward, 0]];

  if (isAcrossRiver(piece.side, row)) {
    destinations.push([0, -1])
    destinations.push([0, 1]);
  }

  for (const [rowStep, colStep] of destinations) {
    const newRow = row + rowStep;
    const newCol = col + colStep;

    if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLS) {
      continue;
    }

    const newPosition = rowColToPosition(newRow, newCol);
    
    const blockingPiece = pieces.find(p => p.position === newPosition);

    if(!blockingPiece) {
      moves.push(newPosition);
    } else if (blockingPiece.side !== piece.side) {
      moves.push(newPosition);
    }
  }

  return moves;
}
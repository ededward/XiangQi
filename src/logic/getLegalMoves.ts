import type { Piece } from "../types/Piece";
import { getChariotMoves } from "./movements/chariot";
import { getHorseMoves } from "./movements/horse";
import { getElephantMoves } from "./movements/elephant";

export function getLegalMoves(piece: Piece, pieces: Piece[]): number[] {
  switch (piece.type) {
    case "chariot":
      return getChariotMoves(piece, pieces);

    case "horse":
      return getHorseMoves(piece, pieces);

    case "elephant":
      return getElephantMoves(piece, pieces);

    default:
      return [];
  }
}
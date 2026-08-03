import type { Piece } from "../types/Piece";
import { getChariotMoves } from "./movements/chariot";
import { getHorseMoves } from "./movements/horse";
import { getElephantMoves } from "./movements/elephant";
import { getAdvisorMoves } from "./movements/advisor";
import { getGeneralMoves } from "./movements/general";

export function getLegalMoves(piece: Piece, pieces: Piece[]): number[] {
  switch (piece.type) {
    case "chariot":
      return getChariotMoves(piece, pieces);

    case "horse":
      return getHorseMoves(piece, pieces);

    case "elephant":
      return getElephantMoves(piece, pieces);

    case "advisor":
      return getAdvisorMoves(piece, pieces);

    case "general":
      return getGeneralMoves(piece, pieces);

    default:
      return [];
  }
}
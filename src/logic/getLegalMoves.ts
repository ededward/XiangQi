import type { Piece } from "../types/Piece";
import { getChariotMoves } from "./movements/chariot";
import { getHorseMoves } from "./movements/horse";
import { getElephantMoves } from "./movements/elephant";
import { getAdvisorMoves } from "./movements/advisor";
import { getGeneralMoves } from "./movements/general";
import { getCannonMoves } from "./movements/cannon";
import { getSoldierMoves } from "./movements/soldier";

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

    case "cannon":
      return getCannonMoves(piece, pieces);
          
    case "soldier":
      return getSoldierMoves(piece, pieces);

    default:
      return [];
  }
}
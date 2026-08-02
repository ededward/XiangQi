import type { PieceType, Side } from "../types/Piece";

export const pieceSymbols: Record<Side, Record<PieceType, string>> = {
  red: {
    general: "帥",
    advisor: "仕",
    elephant: "相",
    horse: "傌",
    chariot: "俥",
    cannon: "炮",
    soldier: "兵",
  },
  black: {
    general: "將",
    advisor: "士",
    elephant: "象",
    horse: "馬",
    chariot: "車",
    cannon: "砲",
    soldier: "卒",
  },
};
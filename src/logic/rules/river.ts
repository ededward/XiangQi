import { BLACK_RIVER_ROW, RED_RIVER_ROW } from "../../data/boardConstants";

export function isAcrossRiver(side: "red" | "black", row: number): boolean {
  if (side === "red") {
    return row < RED_RIVER_ROW;
  }
  return row > BLACK_RIVER_ROW;
}
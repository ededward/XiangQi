import { BLACK_PALACE, RED_PALACE } from "../../data/boardConstants";

export function isInPalace(side: "red" | "black", position: number): boolean {
  if (side === "red") {
    return RED_PALACE.includes(position);
  }
  return BLACK_PALACE.includes(position);
}
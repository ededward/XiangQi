export type PieceType = 
  "soldier" | 
  "cannon" | 
  "chariot" | 
  "horse" | 
  "elephant" | 
  "advisor" | 
  "general";

export type Side = "red" | "black";
  
export type Piece = {
    type: PieceType;
    side: Side;
    position: number;
};
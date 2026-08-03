import "./Piece.css";
import type {Piece as PieceType} from "../types/Piece";
import {pieceSymbols} from "../data/pieceSymbols";

type PieceProps = {
  piece: PieceType;
  selected: boolean;
  onSelect: () => void;
};

function Piece({ piece, selected, onSelect }: PieceProps) {
  return (
    <div 
      className={`piece ${piece.side} ${selected ? "selected" : ""}`} 
      onClick={(event) => {
        event.stopPropagation();
        onSelect();
      }}
    >
      {pieceSymbols[piece.side][piece.type]}
    </div>
  )
}

export default Piece;
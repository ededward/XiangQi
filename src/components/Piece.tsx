import "./Piece.css";
import type {Piece as PieceType} from "../types/Piece";
import {pieceSymbols} from "../data/pieceSymbols";

type PieceProps = {
  piece: PieceType;
};

function Piece({ piece }: PieceProps) {
  return (
    <div className={`piece ${piece.side}`}>
      {pieceSymbols[piece.side][piece.type]}
    </div>
  )
}

export default Piece;
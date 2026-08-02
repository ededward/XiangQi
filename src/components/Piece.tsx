import type {Piece as PieceType} from "../types/Piece";

type PieceProps = {
  piece: PieceType;
};

function Piece({ piece }: PieceProps) {
  return (
    <div className={`piece ${piece.side}`}>
      {piece.type}
    </div>
  )
}

export default Piece;
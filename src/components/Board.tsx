import "./Board.css";
import CornerMark from "./CornerMark";
import Point from "./Point";
import Piece from "./Piece";
import {
  fullMarkPositions,
  leftMarkPositions,
  rightMarkPositions
} from "../data/boardDecorations";
import type { Piece as PieceType } from "../types/Piece";
import { ROWS, COLS } from "../data/boardConstants";

type BoardProps = {
  pieces: PieceType[];
  selectedPiece: PieceType | null;
  onPieceSelect: (piece: PieceType) => void;
  onPointClick: (position: number) => void;
  legalMoves?: number[];
};

function Board({ pieces, selectedPiece, onPieceSelect, onPointClick, legalMoves }: BoardProps) {
  return (
    <div className="board">
      {Array.from({ length: ROWS * COLS }).map((_, index) => {
        const position = index + 1;
        const piece = pieces.find(
            piece => piece.position === position
        );
        const isLegalMove = legalMoves?.includes(position);

        return (
          <Point 
            key={index}
            onClick={() => onPointClick(position)}
            isLegalMove={isLegalMove}
          >
            {piece && 
            <Piece 
              piece={piece}
              selected={selectedPiece?.position === piece.position}
              onSelect={() => onPieceSelect(piece)}
            />}

            {fullMarkPositions.includes(position) && (
              <CornerMark />
            )}

            {leftMarkPositions.includes(position) && (
              <CornerMark side="left" />
            )}

            {rightMarkPositions.includes(position) && (
              <CornerMark side="right" />
            )}
          </Point>
        );
      })}

      <div className="river">
        <span>楚河</span>
        <span>漢界</span>
      </div>

      <div className="palace top-palace">
        <div className="diagonal diagonal-1"></div>
        <div className="diagonal diagonal-2"></div>
      </div>

      <div className="palace bottom-palace">
        <div className="diagonal diagonal-3"></div>
        <div className="diagonal diagonal-4"></div>
      </div>
    </div>
  )
}

export default Board;
import "./Board.css";
import CornerMark from "./CornerMark";
import Point from "./Point";
import {
  fullMarkPositions,
  leftMarkPositions,
  rightMarkPositions
} from "../data/boardDecorations";

function Board() {
  const rows = 10;
  const cols = 9;

  return (
    <div className="board">
      {Array.from({ length: rows * cols }).map((_, index) => {
        const position = index + 1;

        return (
          <Point key={index}>
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
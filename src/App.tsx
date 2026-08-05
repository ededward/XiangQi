import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import { initialPieces } from "./data/initialPositions";
import type { Side, Piece } from "./types/Piece";
import { getLegalMoves } from "./logic/getLegalMoves";

function App() {
  const [pieces, setPieces] = useState(initialPieces);
  const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<Side>("red");
  const [gameMode, setGameMode] = useState<"single" | "double">("double");
  const legalMoves = selectedPiece ? getLegalMoves(selectedPiece, pieces) : [];

  function handlePointClick(position: number) {
    if (!selectedPiece) return;
    if (!legalMoves.includes(position)) return;
    
    setPieces(movePiece(pieces, selectedPiece, position));
    setSelectedPiece(null);
    setCurrentPlayer(player =>
      player === "red" ? "black" : "red"
    );
  }

  function handlePieceClick(piece: Piece) {
    if (piece.side !== currentPlayer) return;

    if (selectedPiece?.position === piece.position) {
      setSelectedPiece(null);
    } else {
      setSelectedPiece(piece);
    }
  }

  function movePiece(pieces: Piece[], selectedPiece: Piece, position: number) {
    const remainingPieces = pieces.filter(piece => piece.position !== position);
    const updatedPieces = remainingPieces.map(piece => {
      if (piece.position === selectedPiece.position) {
        return {...piece, position};
      }
      return piece;
    });
    return updatedPieces;
  }

  return (
    <div className="app">
      <h1>象棋</h1>

      <h2>
        {
          currentPlayer === "red"
            ? "🔴 Red's Turn"
            : "⚫ Black's Turn"
        }
      </h2>

      <Board 
        pieces={pieces}
        selectedPiece={selectedPiece}
        onPieceSelect={handlePieceClick}
        onPointClick={handlePointClick}
        legalMoves={legalMoves}
      />
    </div>
  );
}

export default App;
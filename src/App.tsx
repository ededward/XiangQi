import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import { initialPieces } from "./data/initialPositions";
import type { Piece } from "./types/Piece";
import { getLegalMoves } from "./logic/getLegalMoves";

function App() {
  const [pieces, setPieces] = useState(initialPieces);
  const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null);
  const legalMoves = selectedPiece ? getLegalMoves(selectedPiece, pieces) : [];

  function handlePointClick(position: number) {
    if (!selectedPiece) return;

    if (!legalMoves.includes(position)) return;

    const remainingPieces = pieces.filter(piece => piece.position !== position);
    const updatedPieces = remainingPieces.map(piece => {
      if (piece.position === selectedPiece.position) {
        return { ...piece, position };
      }
      return piece;
    });
    
    setPieces(updatedPieces);
    setSelectedPiece(null);
  }

  function handlePieceClick(piece: Piece) {
    if (selectedPiece?.position === piece.position) {
      setSelectedPiece(null);
    } else {
      setSelectedPiece(piece);
    }
  }

  return (
    <div className="app">
      <h1>象棋</h1>

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
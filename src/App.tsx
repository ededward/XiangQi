import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import { initialPieces } from "./data/initialPositions";
import type { Piece } from "./types/Piece";
import { getLegalMoves } from "./logic/getLegalMoves";
//import { getSoldierMoves} from "./logic/movements/soldier";

function App() {
  const [pieces, setPieces] = useState(initialPieces);
  const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null);
  const legalMoves = selectedPiece ? getLegalMoves(selectedPiece, pieces) : [];

  //testing soldier moves
  /*console.log(
    getSoldierMoves(
      initialPieces[16],
      initialPieces
    )
  );*/

  function handlePointClick(position:number) {
    if (!selectedPiece) return;
    
    console.log(
      `${selectedPiece.side} ${selectedPiece.type} → ${position}`
    );
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
      />
    </div>
  );
}

export default App;
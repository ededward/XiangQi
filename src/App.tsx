import "./App.css";
import CornerMark from "./components/CornerMark";

function App() {
  const rows = 10;
  const cols = 9;

  const markPositions = [
    // top cannons
    20, 26,

    // top soldiers
    28, 30, 32, 34, 36,

    // bottom soldiers
    55, 57, 59, 61, 63,

    // bottom cannons
    65, 71,
  ];

  return (
    <div className="app">
      <h1>象棋</h1>

      <div className="board">
        {Array.from({ length: rows * cols }).map((_, index) => (
          <div key={index} className="point">
            {markPositions.includes(index + 1) && <CornerMark />}
          </div>
        ))}

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
    </div>
  );
}

export default App;
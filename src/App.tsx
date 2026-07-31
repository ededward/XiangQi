import "./App.css";

function App() {
  const rows = 10;
  const cols = 9;

  return (
    <div className="app">
      <h1>象棋</h1>

      <div className="board">
        {Array.from({ length: rows * cols }).map((_, index) => (
          <div key={index} className="point" />
        ))}

        <div className="river">
          <span>楚河</span>
          <span>漢界</span>
        </div>
      </div>
    </div>
  );
}

export default App;
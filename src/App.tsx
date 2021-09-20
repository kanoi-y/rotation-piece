import { useState } from "react";
import "./styles.css";

export default function App() {
  const [pieceState, setPieceState] = useState([
    [1, 1, 1],
    [1, 0, 1],
    [0, 0, 0]
  ]);

  const rightRotation = () => {
    setPieceState((prevPieceState) => {
      let result: number[][] = [];

      for (let i = 0; i < 3; i++) {
        const line: number[] = [];

        for (let j = 0; j < 3; j++) {
          const cell = prevPieceState[2 - j][i];
          line.push(cell);
        }
        result.push(line);
      }
      return result;
    });
  };

  return (
    <div className="App">
      <div className="piece">
        {pieceState.map((piece, i) => (
          <div key={i} className="piece_line">
            {piece.map((line, j) => (
              <div
                key={j}
                className={"piece_cell " + (line === 1 ? "show" : "")}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={() => rightRotation()}>ピースを回転</button>
    </div>
  );
}

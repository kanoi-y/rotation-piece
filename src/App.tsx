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

      for (let i = 0; i < prevPieceState.length; i++) {
        const line: number[] = [];

        for (let j = 0; j < prevPieceState[i].length; j++) {
          const cell = prevPieceState[prevPieceState[i].length - 1 - j][i];
          line.push(cell);
        }
        result.push(line);
      }
      return result;
    });
  };

  const sideReverse = () => {
    setPieceState((prevPieceState) => {
      let result: number[][] = [];

      for (let i = 0; i < prevPieceState.length; i++) {
        const line: number[] = [];

        for (let j = 0; j < prevPieceState[i].length; j++) {
          const cell = prevPieceState[i][prevPieceState[i].length - 1 - j];
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
      <div>
        <button style={{ marginRight: "12px" }} onClick={() => rightRotation()}>
          ピースを右回転
        </button>
        <button onClick={() => sideReverse()}>ピースを横に反転</button>
      </div>
    </div>
  );
}

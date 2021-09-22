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
      return prevPieceState.map((line, i) => {
        return line.map((cell, j) => {
          return prevPieceState[line.length - 1 - j][i];
        });
      });
    });
  };

  const sideReverse = () => {
    setPieceState((prevPieceState) => {
      return prevPieceState.map((line, i) => {
        return line.map((cell, j) => {
          return prevPieceState[i][line.length - 1 - j];
        });
      });
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

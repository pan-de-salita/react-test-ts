import { useState } from "react";
import Square from "./Square";
import Status from "./Status";
import isGameEnd from "./isGameEnd";

export default function Board() {
  let square: string | null = null;
  const row: typeof square[] = Array(3).fill(square);
  const board: typeof square[][] = Array(3).fill(null).map(() => row);

  const [squares, setSquares] = useState<(string | null)[][]>(board);
  const [isXNext, setIsXNext] = useState<boolean>(true);

  function handleSquareClick(x: number, y: number): void {
    if (isGameEnd(squares) || squares[x][y]) return;

    setSquares(prevSquares => {
      const newSquares = prevSquares.map(subArr => [...subArr]);
      newSquares[x][y] = isXNext ? "X" : "O";
      return newSquares;
    });
    setIsXNext(prevTurn => !prevTurn);
  }

  return (
    <>
      <Status xTurn={isXNext} isGameEnd={isGameEnd(squares)} />
      {board.map((row, rowIdx) =>
        <div className="board-row" key={`row ${rowIdx}`}>
          {row.map((_, colIdx) => {
            return (
              <Square
                key={`x: ${rowIdx}, y: ${colIdx}`}
                value={squares[rowIdx][colIdx]}
                onSquareClick={() => handleSquareClick(rowIdx, colIdx)}
              />
            )
          })}
        </div>
      )}
    </>
  );
}

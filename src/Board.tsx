import Square from "./Square";
import isGameEnd from "./isGameEnd";

interface BoardProps {
  xTurn: boolean;
  squares: (string | null)[][];
  onPlay: (nextSquares: (string | null)[][]) => void;
}

export default function Board({ xTurn, squares, onPlay }: BoardProps) {
  function handleSquareClick(x: number, y: number): void {
    if (isGameEnd(squares) || squares[x][y]) return;

    const nextSquares = squares.map(subArr => [...subArr]);
    nextSquares[x][y] = xTurn ? "X" : "O";

    onPlay(nextSquares);
  }

  return (
    <>
      {squares.map((row, rowIdx) =>
        <div className="board-row" key={`row ${rowIdx}`}>
          {row.map((_, colIdx) => (
            <Square
              key={`x: ${rowIdx}, y: ${colIdx}`}
              value={squares[rowIdx][colIdx]}
              onSquareClick={() => handleSquareClick(rowIdx, colIdx)}
            />
          ))}
        </div>
      )}
    </>
  );
}

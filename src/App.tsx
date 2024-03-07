import { useState } from 'react'
import './App.css'

// define types for the props of a Square component:
interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

// define Square as a React.FC that expects props of type SquareProps:
const Square: React.FC<SquareProps> = function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// NOTE: in reference to the interface and function definitons above, 
// when to use generic and when to use union? 

function Board() {
  // to collect data from multiple children, or to have two child
  // components communicate with each other, declare the shared state in
  // their parent component instead. the parent component can pass that 
  // state back down to the children via props. this keeps the child 
  // components in sync with each other and with their parent. 
  //
  // shared state applicable to all Square components:
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // since state is private to a component that defines it, we cannot
  // update Board's state directly from a Square. instead, we'll pass down a 
  // function from Board to a Square. this function will be called when a 
  // square is clicked.
  function handleClick(i: number): void {
    if (squares[i] || calculateWinner(squares)) return;

    // avoiding direct data mutation allows us to keep previous versions of 
    // our data intact, thus increasing its reusability. immutability also makes
    // it relatively cheap for components to compare wheher their data has changed
    // or not for re-rendering.
    const nextSquares = [...squares];

    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status: string | null;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* 
        onSquareClick is a prop holding the value () => handleClick(i). 
        when passed to onClick in Square, () => handleClick(i) is only ran 
        when a click event is registered. 
        */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares: string | null[]): string | null {
  const lines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 8]
  ];

  for (let i = 0; i < lines.length; i++) {
    // retrieve the values of each subarray in lines:
    let [a, b, c] = lines[i];

    // use the retrieved values above as indices for squares;
    // check whether the symbols in squares[a], squares[b], and
    // squares[c] are not null and equal:
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // if condition met, return the symbol:
      return squares[a];
    }
  }
  // else return null:
  return null;
}


function App() {
  return (
    <>
      <Board />
    </>
  )
}

export default App

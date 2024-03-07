import { useState } from 'react'
import './App.css'

// define types for the props of a Square component
interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

// define Square as a React.FC that expects props of type SquareProps
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
  // shared state applicable to all Square components
  const [squares, setSquares] = useState(Array(9).fill(null));

  // since state is private to a component that defines it, we cannot
  // update Board's state directly from a Square. instead, we'll pass down a 
  // function from Board to a Square. this function will be called when a 
  // square is clicked.
  function handleClick(i: number) {
    const nextSquares = [...squares];
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
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

function App() {
  return (
    <>
      <Board />
    </>
  )
}

export default App

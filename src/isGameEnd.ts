let result: string | null;

export default function isGameEnd(squares: (string | null)[][]): string | null {
  if (checkForWin(squares)
    || checkForWin(reorientVertical(squares))
    || checkForWin(makeDiagonal(squares))
    || isDraw(squares)) {

    return result;
  } else {
    return null;
  }
}

function isDraw(squares: (string | null)[][]): string | null {
  return result = squares.every(subArr => subArr.every(square => square)) ? "draw" : null;
}

function checkForWin(squares: (string | null)[][]): string | null {
  for (let i = 0; i < squares.length; i++) {
    const allX = squares[i].filter(value => value === 'X');
    const allO = squares[i].filter(value => value === 'O');

    if (allX.length === 3) {
      return result = "X wins";
    } else if (allO.length === 3) {
      return result = "O wins";
    }
  }

  return null;
}

function reorientVertical(squares: (string | null)[][]): (string | null)[][] {
  let reorientedGameState = createDefaultSquares();

  for (let i = 0; i < squares.length; i++) {
    for (let j = 0; j < squares.length; j++) {
      reorientedGameState[i][j] = squares[j][i];
    }
  }

  return reorientedGameState;
}

function makeDiagonal(squares: (string | null)[][]): (string | null)[][] {
  const rows = squares.length;
  const cols = squares[0].length;
  let leftDiagonal = [];
  let rightDiagonal = [];

  for (let i = 0; i < rows; i++) {
    leftDiagonal.push(squares[i][i]);
    rightDiagonal.push(squares[i][cols - i - 1]);
  }

  return [leftDiagonal, rightDiagonal];
}

function createDefaultSquares(): (string | null)[][] {
  return Array(3).fill(null).map(() => Array(3).fill(null));
}

interface StatusProps {
  xTurn: boolean;
  isGameEnd: string | null;
}

export default function Status({ xTurn, isGameEnd }: StatusProps) {
  const message: string = isGameEnd ? isGameEnd : xTurn ? "X's turn" : "O's turn";

  return (
    <h3 className="status">{message}</h3>
  )
}

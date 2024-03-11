interface StatusProps {
  xTurn: boolean;
  isEnd: string | null;
}

export default function Status({ xTurn, isEnd }: StatusProps) {
  const message: string = isEnd ? isEnd : xTurn ? "X's turn" : "O's turn";

  return (
    <h3 className="status">{message}</h3>
  )
}

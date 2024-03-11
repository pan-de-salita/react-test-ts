import { useState, useEffect } from "react";
import Status from "./Status";
import Board from "./Board";
import ResetBtn from "./ResetBtn";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import isGameEnd from "./isGameEnd";

export default function Game() {
  const square: string | null = null;
  const row: typeof square[] = Array(3).fill(square);
  const board: typeof square[][] = Array(3).fill(null).map(() => row);

  const [record, setRecord] = useState<(string | null)[][][]>([board]);
  const [move, setMove] = useState<number>(0);
  const [canRevisitGame, setCanRevisitGame] = useState<boolean>(false);

  const currentSquares = record[move];
  const isXNext = move % 2 === 0;

  useEffect(() => {
    if (isGameEnd(currentSquares)) setCanRevisitGame(true);
  }, [currentSquares]);

  function handlePlay(nextSquares: (string | null)[][]) {
    const nextRecord = [...record, nextSquares];
    setRecord(nextRecord);
    setMove(nextRecord.length - 1);
  }

  function handleResetBtnClick() {
    setRecord([board]);
    setMove(0);
    setCanRevisitGame(false);
  }

  function handlePrevBtnClick() {
    if (move > 0) setMove(move - 1);
  }

  function handleNextBtnClick() {
    if (move < record.length - 1) setMove(move + 1);
  }

  return (
    <>
      <Status xTurn={isXNext} isEnd={isGameEnd(currentSquares)} />
      <Board xTurn={isXNext} squares={currentSquares} onPlay={handlePlay} />
      <div className="btn-container flex justify-around gap-4">
        <PrevBtn canRevisit={canRevisitGame} onPrevBtn={handlePrevBtnClick} />
        <ResetBtn onResetBtn={handleResetBtnClick} />
        <NextBtn canRevisit={canRevisitGame} onNextBtn={handleNextBtnClick} />
      </div>
    </>
  )
}

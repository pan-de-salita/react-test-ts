interface ReviewProps {
  isEnd: string | null;
}

export default function Review({ isEnd }: ReviewProps) {
  function handlePrevClick() {

  }

  return (
    <>
      {isEnd && <button className="prev-btn">prev</button>}
      {isEnd && <button className="next-btn">next</button>}
    </>
  )
}

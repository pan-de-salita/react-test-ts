interface NextBtnProps {
  canRevisit: boolean;
  onNextBtn: () => void;
}

export default function NextBtn({ canRevisit, onNextBtn }: NextBtnProps) {
  return (
    canRevisit && <button className="prev-btn" onClick={onNextBtn}>next</button>
  )
}

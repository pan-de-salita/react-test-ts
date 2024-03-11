interface PrevBtnProps {
  canRevisit: boolean;
  onPrevBtn: () => void;
}

export default function PrevBtn({ canRevisit, onPrevBtn }: PrevBtnProps) {
  return (
    canRevisit && <button className="prev-btn" onClick={onPrevBtn}>prev</button>
  )
}

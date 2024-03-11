interface ResetBtnProps {
  onResetBtn: () => void;
}

export default function ResetBtn({ onResetBtn }: ResetBtnProps) {
  return (
    <button className="reset-btn" onClick={onResetBtn}>reset</button>
  )
}

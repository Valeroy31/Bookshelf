
import '../../css/MainBtn.css'
const MainBtn = ({text, type, disabled, onClick}) => {
  return (
    <>
    <button className="props-btn" type={type} disabled={disabled} onClick={onClick}>
      {text}
    </button>
    </>
  )
}

export default MainBtn
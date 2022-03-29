import { FC } from 'react'
import './Slider_btn.scss'

interface Props {
  direct: string
  moveSlide: () => void;
}

const Slider_btn:FC<Props> = ({direct , moveSlide}) => {
  return (
    <button className={direct === 'prev' ? 'btn__slider prev' : 'btn__slider next'} onClick={moveSlide}>
      {direct === 'prev' ? (
        <i className="ri-arrow-left-circle-fill"></i>
      ) : (
        <i className="ri-arrow-right-circle-fill"></i>
      )}
    </button>
  )
}

export default Slider_btn
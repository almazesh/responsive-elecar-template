import React, { FC } from 'react'
import './Popular_Btns.scss'
interface Props {
  direct:string
  moveSlide:() => void;
} 

const Popular_Btns:FC<Props> = ({direct , moveSlide}) => {
  return (
    <button onClick={moveSlide} className={direct === 'prev' ? 'popular__btns prev' : 'popular__btns next'}>
      {direct === 'prev' ? (
        <i className="ri-arrow-left-s-line"></i>
      ) : (
        <i className="ri-arrow-right-s-line"></i>
      )}
    </button>
  )
}

export default Popular_Btns
import { SliderData } from '../../Utils/Slider_DATA';
import { FC, useState } from 'react';
import './Slider.scss'
import Slider_btn from './Slider_btn';


const Slider:FC = () => {
  const [sliderIndex , setSliderIndex] = useState(1)

  const nextSlide = () => {
    if(sliderIndex !== SliderData.length){
      setSliderIndex(sliderIndex + 1)
    }else if(sliderIndex === SliderData.length){
      setSliderIndex(1)
    }
  }

  const prevSlide = () => {
    if(sliderIndex === 1){
      setSliderIndex(SliderData.length)
    }else if (sliderIndex !== 1){
      setSliderIndex(sliderIndex - 1)
    }
  }

  return (
    <div className='slider__parent' data-aos="fade-up">
      {SliderData.map((item, index) => (
        <img  src={item.url} key={item.id} className={sliderIndex === index + 1 ? 'slider__img active' : 'slider__img'} />
      ))}
      <Slider_btn direct='prev' moveSlide={prevSlide}/>
      <Slider_btn direct='next' moveSlide={nextSlide}/>
    </div>
  )
}

export default Slider
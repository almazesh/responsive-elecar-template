import { PopularCars, PopularList } from '../../../Utils/Popular_DATA';
import { useState } from 'react';
import Popular_Btns from './Popular_Btns';

const Popular = () => {
  const [sliderIndex , setSliderIndex] = useState(1)

  const nextSlide = () => {
    if(sliderIndex !== PopularCars.length){
      setSliderIndex(sliderIndex + 1)
    }else if(sliderIndex === PopularCars.length){
      setSliderIndex(1)
    }
  }

  const prevSlide = () => {
    if(sliderIndex === 1){
      setSliderIndex(PopularCars.length)
    }else if (sliderIndex !== 1){
      setSliderIndex(sliderIndex - 1)
    }
  }

  return (
    <section className='popular section' id='Popular'>
      <h2 className='section__title'>
        Choose your Electric Car <br /> of the Porshe Brand
      </h2>

      

      <div className="popular__container container">
        <div className='popular__center'>
          {PopularCars.map((item, index) => (
            <article className={sliderIndex === index + 1 ? 'popular__card popular__card-active ' : 'popular__card'} key={item.id}>
              <div className="shape shape__smaller"></div>

              <h1 className='popular__title'>{item.title}</h1>
              <h3 className='popular__subtitle'>{item.subTitle}</h3>

              <img src={item.url} alt="" className='popular__img'/>

              <div className="popular__data">
                {PopularList.map(item => (
                  <div className="popular__data-group" key={item.id}>
                    <i className={item.icon}></i> {item.title}
                  </div>
                ))}
              </div>

              <h3 className='popular__price'>{item.price}</h3>

              <button className="button popular__button">
                <i className='ri-shopping-bag-2-line'></i>
              </button>
            </article>
          ))}

        </div>
        <div className='popular__btns-line'>
          <Popular_Btns direct="prev" moveSlide={prevSlide}/>
          <Popular_Btns direct="next" moveSlide={nextSlide}/>
        </div>
      </div>
    </section>
  )
}

export default Popular
import Slider from "../../slider/Slider"
import { Servicelist } from '../../../Utils/Service_DATA';


const Home = () => {
  return (
    <section className='section home' id='Home'>
      <div className="shape shape__big"></div>
      <div className="shape shape__small"></div>
      <div className="home__container container grid">
        <div className="home__data">
          <h1 className="home__title" data-aos="fade-down">
            Choose The Best Car
          </h1>
          <h2 className="home__subtitle" data-aos="fade-down">
            Porshe Mission E
          </h2>
          <h3 className="home__elec" data-aos="fade-down">
            <i className="ri-flashlight-fill"></i>
            Electric Car
          </h3> 
        </div>
        <Slider />
        <div className="home__car">
          {Servicelist.map(item => (
            <div className="home__car-data" key={item.id}>
              <div className="home__car-icon">
                <i className={item.icon}></i>
              </div>
              <h2 className="home__car-number">
                {item.number}
              </h2>
              <h3 className="home__car-name">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
        <a href="#About" className="home__button">START</a>
      </div>
    </section>
  )
}

export default Home
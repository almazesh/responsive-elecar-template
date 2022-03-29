import { Featureslist } from '../../../Utils/Features_DATA';
const featuresImg = require('../../../assets/features.png')
const maps = require('../../../assets/map.svg')

const Features = () => {
  return (
    <section className="features section">
      <h2 className="section__title">More features</h2>

      <div className="features__container container grid">
        <div className="features__group">
          <img src={featuresImg} alt="" className="features__img" />

         {Featureslist.map(item => (
            <div className={`features__card features__card-${item.id}`} key={item.id}>
              <h3 className="features__card-title">{item.title}</h3>
              <p className="features__card-description">{item.desc}</p>
            </div>
         ))}
        </div>
      </div>

      <img src={maps.default} alt="" className="features__maps"/>
    </section>
  )
}

export default Features
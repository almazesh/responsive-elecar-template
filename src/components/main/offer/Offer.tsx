const offerBg = require('../../../assets/offer-bg.png')
const offerImg = require('../../../assets/offer.png')

const Offer = () => {
  return (
    <section className="offer section">
      <div className="offer__container container grid">
        <img src={offerBg} className="offer__bg"/>

        <div className="offer__data">
          <h2 className="section__title offer__title">
            Do You Want To Recieve <br /> Special Offers?
          </h2>

          <p className="offer__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam enim nulla repudiandae at ullam quo perferendis quia sapiente facere laborum?            
          </p>
          <a href="#" className="button">Subscribe Now</a>
        </div>
        <img src={offerImg} alt="" className="offer__img"/>
      </div>
    </section>
  )
}

export default Offer
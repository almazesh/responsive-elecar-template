const aboutImg = require('../../../assets/about.png')

const About = () => {
  return (
    <section className="about section" id="About">   
      <div className="about__container container grid">
        <div className="about__group">
          <img src={aboutImg} alt=""  className="about__img"/>

          <div className="about__card">
            <h3 className="about__card-title">2.500+</h3>
            <p className="about__card-description">
              Supercharges  placed along popular routes
            </p>
          </div>
        </div>

        <div className="about__data">
          <h2 className="section__title about__title">
            Machines With <br /> Future Technology
          </h2>
          <p className="about__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur doloremque fugit praesentium deserunt fugiat nihil, illo minus incidunt dolores dignissimos, iure nostrum accusantium laboriosam odio mollitia, dolore reiciendis repellat. Eius.
          </p>
          <a href="#" className="button">Know more</a>
        </div>
      </div>
    </section>
  )
}

export default About
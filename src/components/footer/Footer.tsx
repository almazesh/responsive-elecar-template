import React from 'react'
import { Navdata } from '../../Utils/Nav_DATA'

const Footer = () => {
  return (
    <section className='footer section'>
      <div className="shape shape__big"></div>
      <div className="shape shape__small"></div>

      <div className="footer__container container grid">
        <div className="footer__content">
          <a href="#" className="footer__logo">
            <i className='ri-steering-line'></i> Elecar
          </a>
          <p className='footer__description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem, quaerat praesentium laboriosam voluptates quisquam omnis autem quas et aspernatur? 
          </p>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">
            Company
          </h3>

          <ul className='footer__links'>
            {Navdata.map(item => (
              <li key={item.id}>
                <a href={`#${item.title}`} className="footer__social-links">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer
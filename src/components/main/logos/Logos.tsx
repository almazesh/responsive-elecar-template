
import { Logoslist } from '../../../Utils/Logos.DATA';
const Logos = () => {
  return (
    <section className='logos section'>
      <div className="logos__container container grid">
        {Logoslist.map(item => (
          <div className='logos__content' key={item.id}>
            <img src={item.url} alt="" className="logos__img"/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Logos
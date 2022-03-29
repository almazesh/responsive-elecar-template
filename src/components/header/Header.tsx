import { useState } from 'react'
import { Navdata } from '../../Utils/Nav_DATA'

const Header = () => {
  const [showMenu , setShowMenu] = useState(false)
  const [changeHeader , setChangeHeader] = useState(false)

  const handleShowMenu = () => setShowMenu(true)

  const handleCloseMenu = () => setShowMenu(false)

  function scrollHeader(){
    if(window.scrollY > 50) setChangeHeader(true);
    else setChangeHeader(false)
  }

  window.addEventListener('scroll' , scrollHeader)

  return (
    <header className={changeHeader ? 'header sticky' : 'header'} id='header'>
      <nav className='nav container'>
        <a href="" className='nav__logo'>
          <i className="ri-steering-line"></i>
          Elecar
        </a>
        <div className={showMenu ? 'nav__menu show__menu' : 'nav__menu'}>
          <ul className='nav__list'>
            {Navdata.map(route => (
              <li key={route.id} className='nav__item' onClick={handleCloseMenu}>
                <a href={`#${route.title}`} className='nav__link'>
                  {route.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__close" onClick={handleCloseMenu}>
            <i className="ri-close-line"></i>
          </div>
        </div>
        
        {/* Toggle Button */}

        <div className="nav__toggle" onClick={handleShowMenu}>
          <i className="ri-menu-3-fill"></i>
        </div>

      </nav>
    </header>
  )
}

export default Header
import Home from './home/Home'
import Popular from './popular/Popular'
import About from './about/About'
import Features from './features/Features'
import Offer from './offer/Offer'
import Logos from './logos/Logos'

const Main = () => {
  return (
    <main className='main'>
      <Home />
      <About />
      <Popular />
      <Features />
      <Offer />
      <Logos />
    </main>
  )
}

export default Main
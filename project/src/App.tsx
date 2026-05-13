import { useEffect } from 'react'
import Lenis from 'lenis'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import PulseBanner from './components/PulseBanner/PulseBanner'
import Services from './components/Services/Services'
import Work from './components/Work/Work'
import Brands from './components/Brands/Brands'
import Footer from './components/Footer/Footer'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Hero />
        
        <PulseBanner />
        <Services />
        <Work />
        <Brands />

      </main>
      <Footer />
    </div>
  )
}

export default App

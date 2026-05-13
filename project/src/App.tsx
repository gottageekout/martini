import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import PulseBanner from './components/PulseBanner/PulseBanner'
import Services from './components/Services/Services'
import Work from './components/Work/Work'
import Brands from './components/Brands/Brands'
import Footer from './components/Footer/Footer'

function App() {
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

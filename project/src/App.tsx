
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import PulseBanner from './components/PulseBanner/PulseBanner'
import Services from './components/Services/Services'


function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Hero />
        <PulseBanner />
        <Services />
      </main>
    </div>
  )
}

export default App

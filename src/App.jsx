import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <CTA />
      </main>
    </div>
  )
}

export default App

import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProcessSteps from './components/ProcessSteps.jsx'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <Hero />
        <ProcessSteps />
      </main>
    </div>
  )
}

export default App
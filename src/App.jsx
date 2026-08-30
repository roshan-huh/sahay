import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProcessSteps from './components/ProcessSteps.jsx'
import NeedInput from './components/NeedInput.jsx'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <Hero />
        <ProcessSteps />
        <NeedInput />
      </main>
    </div>
  )
}

export default App
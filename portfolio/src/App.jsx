import GradientSelector from './components/GradientSelector'
import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'

function App() {
  // default to a dark gradient to match the desired look
  const [currentGradient, setCurrentGradient] = useState({
    id: 5,
    name: 'Tech Noir',
    css: 'linear-gradient(to right, #000000, #434343)',
    colors: ['#000000', '#434343'],
  })

  const handleGradientChange = (gradient) => {
    setCurrentGradient(gradient)
  }
  return (
    <div
      className="flex flex-col min-h-screen no-scrollbar"
      style={{
        backgroundImage: currentGradient.css,
      }}
    >
      {/* <GradientSelector
        onGradientChange={handleGradientChange}
        currentGradient={currentGradient}
      /> */}
      <div className="fixed top-0 left-[45%] right-0 z-50">
        <Navbar />
      </div>
      <main className="flex-1 relative pt-16 overflow-x-hidden no-scrollbar">
        <Hero />
      </main>
    </div>
  )
}

export default App

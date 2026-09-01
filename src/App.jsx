import React from 'react'
import BackgroundEffects from './components/BackgroundEffects'
import MusicPlayer from './components/MusicPlayer'
import { Hero } from './components/Sections'

function App() {
  return (
    <div className="app-container">
      <BackgroundEffects />
      <MusicPlayer />
      
      <Hero />
    </div>
  )
}

export default App

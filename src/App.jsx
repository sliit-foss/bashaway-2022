import { useState } from 'react'
import logo from '../public/assets/logo.svg'
import { Footer } from './components/common'
import { Register } from './components'
import './styles/App.css'
import Rules from './components/rulesNRegulations/rules'
function App() {

  return (
    <div className="App font-inter">
     
      <Rules/>
      <Register />
      <Footer />
    </div>
  )
}

export default App

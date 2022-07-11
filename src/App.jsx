import { useState } from 'react'
import logo from '../public/assets/logo.svg'
import { Header } from './components/common'
import { Footer } from './components/common'
import { Register, Sponsors, Speakers, Prizes } from './components'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App font-inter">
      <Header/>
      <Prizes />
      <Speakers />
      <Sponsors />
      <Register />
      <Footer />
    </div>
  )
}

export default App

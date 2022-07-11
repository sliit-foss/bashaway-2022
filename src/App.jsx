import { Footer } from './components/common'
import { Register, Sponsors, Speakers, Prizes, Rules } from './components'
import './styles/App.css'

function App() {
  return (
    <div className="App font-inter">
      <Rules/>
      <Prizes />
      <Speakers />
      <Sponsors />
      <Register />
      <Footer />
    </div>
  )
}

export default App

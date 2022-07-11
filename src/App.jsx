import { Header, Footer, Layout } from './components/common'
import { Register, Sponsors, Speakers, Prizes , Timeline} from './components'

function App() {
  return (
    <Layout>
      <Header/>
      <Timeline />
      <Prizes />
      <Speakers />
      <Sponsors />
      <Register />
      <Footer />
    </Layout>
  )
}

export default App

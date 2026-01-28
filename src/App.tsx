//css
import './styles/thema.css'
import './styles/global.css'

//components
import Heading from './components/Heading'
import Container from './components/Container'
import Logo from './components/Logo'

//icons
//import {TimerIcon } from 'lucide-react'

const App = () => {

  return (
  <>
  <Container>
    <Logo/>
  </Container>

  <Container>
    <Heading>MENU</Heading>
  </Container>
  </>
  )
}

export default App
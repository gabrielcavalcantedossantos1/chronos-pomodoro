//css
import './styles/thema.css'
import './styles/global.css'

//components
import Heading from './components/Heading'
import Container from './components/Container'
import Logo from './components/Logo'
import Menu from './components/Menu'
import CountDown from './components/CountDown'

//icons
//import {TimerIcon } from 'lucide-react'

const App = () => {

  return (
  <>
  <Container>
    <Logo/>
  </Container>

  <Container>
    <Menu/>
  </Container>

  <Container>
    <CountDown/>
  </Container>

  <Container>
    <form action="" className='form'>
      <div className="formRow">
        <label htmlFor="input">Tarefa</label>
        <input type="text" id='input' />
      </div>

      <div className="formRow">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="formRow">
        <p>Ciclos</p>
        <p>0 0 0 0 0 0</p>
      </div>

      <div className="formRow">
        <button>Enviar</button>
      </div>
    </form>
  </Container>
  </>
  )
}

export default App
//css
import './styles/thema.css'
import './styles/global.css'

//components
//import Heading from './components/Heading/index'
import Container from './components/Container/index'
import Logo from './components/Logo/index'
import Menu from './components/Menu/index'
import CountDown from './components/CountDown/index'
import DefaultInput from './components/DefaultInput/Index'

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
        <DefaultInput 
        id='input' 
        type='text' 
        label='Tarefa'
        placeholder='TITULO'
        />
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
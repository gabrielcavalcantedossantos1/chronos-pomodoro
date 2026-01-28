//css
import './styles/thema.css'
import './styles/global.css'

//react
//import { useState } from 'react'

//components
import Container from './components/Container/index'
import Logo from './components/Logo/index'
import Menu from './components/Menu/index'
import CountDown from './components/CountDown/index'
import DefaultInput from './components/DefaultInput/Index'
import Cycles from './components/Cycles/Index'
import DefaultButton from './components/DefaultButton/Index'
import Footer from './components/Footer'
//import Heading from './components/Heading'

//icons
import { PlayCircleIcon } from 'lucide-react'

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
        placeholder='Digite algo'
        />
      </div>

      <div className="formRow">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="formRow">
        <Cycles/>
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon/>} color='green'/>
      </div>
    </form>
  </Container>

  <Container>
    <Footer/>
  </Container>
  </>
  )
}

export default App
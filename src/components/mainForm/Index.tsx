//components
import DefaultInput from '../DefaultInput/Index'
import DefaultButton from '../DefaultButton/Index'
import Cycles from '../Cycles/Index'
import {PlayCircleIcon} from 'lucide-react'


const MainForm = () => {

  return (
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
        <p>Próximo ciclo em 25 min</p>
      </div>

      <div className="formRow">
        <Cycles/>
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon/>} color='green'/>
      </div>
    </form>
  )
}

export default MainForm
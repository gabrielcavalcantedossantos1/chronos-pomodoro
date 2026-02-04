//components
import DefaultInput from '../DefaultInput/Index'
import DefaultButton from '../DefaultButton/Index'
import Cycles from '../Cycles/Index'
import {PlayCircleIcon, StopCircleIcon} from 'lucide-react'
//import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { useRef } from 'react'
import type { TaskModel } from '../../models/TaskModel'
import { useTaskContext } from '../../contexts/TaskContext'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import { TaskActionType } from '../../contexts/TaskContext/taskActions'


const MainForm = () => {
  const { state, dispatch} = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)

  //ciclos
  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    if(taskNameInput.current === null) return

    const taskName = taskNameInput.current.value.trim()


    
    if(!taskName) {
      alert('Digite algo')
      return
    }
    
    const newTask: TaskModel = {
      id: Math.random().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType
    }


    dispatch({type: TaskActionType.START_TASK, payload :newTask})
  }

  function handleInterruptTask() {
    dispatch({type: TaskActionType.INTERRUPT_TASK})

  }

  return (
  <form onSubmit={handleCreateNewTask} action="" className='form'>
      <div className="formRow">
        <DefaultInput 
        id='input' 
        type='text' 
        label='Tarefa'
        placeholder='Digite algo'
        ref={taskNameInput}
        disabled={!!state.activeTask}
        />
      </div>

      <div className="formRow">
        <p>Próximo ciclo em 25 min</p>
      </div>

      {state.currentCycle > 0
       && (
        <div className="formRow">
          <Cycles/>
        </div>
      )}

      <div className="formRow">
        {!state.activeTask ? (
          <DefaultButton 
            aria-label='Iniciar' 
            title='Iniciar' 
            icon={<PlayCircleIcon/>} 
            type='submit' 
            key='botao_submit'
          />
        ) : (
          <DefaultButton 
            aria-label='Parar' 
            title='parar' 
            icon={<StopCircleIcon/>} 
            type='button' 
            color='red' 
            onClick={handleInterruptTask} 
            key='botao_button'
          />
        )}
          
      </div>
    </form>
  )
}

export default MainForm
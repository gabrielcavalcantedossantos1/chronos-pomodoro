// React
import { useRef } from 'react'

// Libs
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'

// Components
import DefaultInput from '../DefaultInput/Index'
import DefaultButton from '../DefaultButton/Index'
import Cycles from '../Cycles/Index'
import { Tips } from '../tips'

// Context
import { useTaskContext } from '../../contexts/TaskContext'
import { TaskActionType } from '../../contexts/TaskContext/taskActions'

// Utils
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'

// Types
import type { TaskModel } from '../../models/TaskModel'
import { showMessage } from '../../adapters/showMessage'

const MainForm = () => {
  const { state, dispatch } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)

  // Ciclos
  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    showMessage.dismiss()

    if (!taskNameInput.current) return

    const taskName = taskNameInput.current.value.trim()

    if (!taskName) {
      showMessage.warn('Digite o nome da tarefa!')
      return
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    }

    dispatch({
      type: TaskActionType.START_TASK,
      payload: newTask,
    })

    showMessage.success('Tarefa iniciada!')
  }

  function handleInterruptTask() {
    showMessage.dismiss()
    showMessage.error('Tarefa interrompida!')
    dispatch({ type: TaskActionType.INTERRUPT_TASK })
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form">
      <div className="formRow">
        <DefaultInput
          id="input"
          type="text"
          label="Tarefa"
          placeholder="Digite algo"
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className="formRow">
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask ? (
          <DefaultButton
            key="botao_submit"
            aria-label="Iniciar"
            title="Iniciar"
            icon={<PlayCircleIcon />}
            type="submit"
          />
        ) : (
          <DefaultButton
            key="botao_button"
            aria-label="Parar"
            title="Parar"
            icon={<StopCircleIcon />}
            type="button"
            color="red"
            onClick={handleInterruptTask}
          />
        )}
      </div>
    </form>
  )
}

export default MainForm

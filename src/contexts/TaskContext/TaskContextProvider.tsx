import { useEffect, useReducer, useRef } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"
import { taskReducer } from "./taskReducert"
import { TimerWorkerManager } from "../../workers/TimerWorkerManager"
import { TaskActionType } from "./taskActions"
import { loadBeep } from "../../utils/loadBeep"
import type { TaskStateModel } from "../../models/TaskstateModel"

type TaskContextProviderProps = {
  children: React.ReactNode
}

const STORAGE_KEY = 'task-state' // 🔐 chave única do localStorage

export function TaskContextProvider({ children }: TaskContextProviderProps) {

  /**
   * Inicializa o reducer carregando o estado salvo no localStorage (se existir)
   */
  const [state, dispatch] = useReducer(
    taskReducer,
    initialTaskState,
    () => {
      const storageState = localStorage.getItem(STORAGE_KEY)

      if (!storageState) {
        return initialTaskState
      }

      const parsedStorageState = JSON.parse(storageState) as TaskStateModel

      // 🛡️ trava de segurança ao recarregar a página
      return {
        ...parsedStorageState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00'
      }
    }
  )

  const playBeepRef = useRef<(() => void) | null>(null)

  /**
   * Salva o estado no localStorage sempre que ele mudar
   */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))

    document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`
  }, [state])

  /**
   * Carrega / limpa o som quando a tarefa ativa muda
   */
  useEffect(() => {
    if (state.activeTask && !playBeepRef.current) {
      playBeepRef.current = loadBeep()
    }

    if (!state.activeTask) {
      playBeepRef.current = null
    }
  }, [state.activeTask])

  /**
   * Controla o Web Worker do timer
   */
  useEffect(() => {
    if (!state.activeTask) return

    const worker = TimerWorkerManager.getInstance()

    const handleMessage = (e: MessageEvent) => {
      const secondsRemaining = e.data as number

      if (secondsRemaining <= 0) {
        playBeepRef.current?.()
        playBeepRef.current = null

        dispatch({ type: TaskActionType.COMPLETE_TASK })
        worker.terminate()
        return
      }

      dispatch({
        type: TaskActionType.COUNT_DOWN,
        payload: { secondsRemaining }
      })
    }

    worker.addEventListener("message", handleMessage)
    worker.postMessage(state)

    return () => {
      worker.removeEventListener("message", handleMessage)
      worker.terminate()
    }
  }, [state.activeTask])

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}

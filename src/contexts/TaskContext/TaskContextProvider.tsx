import { useEffect, useReducer } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"
import { taskReducer } from "./taskReducert"
import { TimerWorkerManager } from "../../workers/TimerWorkerManager"
import { TaskActionType } from "./taskActions"

type TaskContextProviderProps = {
  children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState)

  useEffect(() => {
    console.log(state)
    
    const worker = TimerWorkerManager.getInstance()

    const handleMessage = (e: MessageEvent) => {
      const secondsRemaining = e.data as number

      // ⛔ Se não tem task ativa, ignora QUALQUER mensagem
      if (!state.activeTask) {
        worker.terminate()
        return
      }

      if (secondsRemaining <= 0) {
        dispatch({ type: TaskActionType.COMPLETE_TASK })
        worker.terminate()
        return
      }

      dispatch({
        type: TaskActionType.COUNT_DOWN,
        payload: { secondsRemaining }
      })
    }

    // 👉 Se NÃO há task ativa, mata o worker e não inicia nada
    if (!state.activeTask) {
      worker.terminate()
      return
    }

    worker.addEventListener("message", handleMessage)
    worker.postMessage(state)

    return () => {
      worker.removeEventListener("message", handleMessage)
    }
  }, [state.activeTask])

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}

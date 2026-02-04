import { useEffect, useReducer } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"
import { taskReducer } from "./taskReducert"
import { TimerWorkerManager } from "../../workers/TimerWorkerManager"

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({children}: TaskContextProviderProps)  {
    
    const [state, dispatch] = useReducer(taskReducer, initialTaskState)
    
    const worker = TimerWorkerManager.getInstance()

    worker.onmessage(e=>{
        const countDonwSeconds = e.data
        console.log(countDonwSeconds)

        if(countDonwSeconds <= 0) {
            console.log('terminou por tempo esgotado')
            worker.terminate()
        }
    })
    
    useEffect(()=> {
        if(!state.activeTask) {
            console.log('terminou por falta de atividade ativa')
            worker.terminate()
        }

        worker.postMessage(state)
    }, [worker, state])

    return <TaskContext.Provider value={{state, dispatch}}>{children}</TaskContext.Provider>
}   
import type { TaskStateModel } from "../../models/TaskstateModel";
import { formattedSecondsRemaining } from "../../utils/formateSecondsToMinuts";
import { getNextCycle } from "../../utils/getNextCycle";
import { TaskActionType, type TaskActionModel } from "./taskActions";

export function taskReducer(
  state: TaskStateModel, 
  action: TaskActionModel
): TaskStateModel {

  switch(action.type) {
    case TaskActionType.START_TASK: {
      const newtask = action.payload
      const nextCycle = getNextCycle(state.currentCycle)
      const secondsRemaining = newtask.duration * 60
      
      return {
        ...state,
        activeTask: newtask,
        currentCycle:nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formattedSecondsRemaining(secondsRemaining),
        tasks: [...state.tasks, newtask]
      }
    }
    case TaskActionType.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if(state.activeTask && state.activeTask.id === task.id) {
            return {...task, interruptDate: Date.now()}
          }
          return task
        })
      }
    }
    case TaskActionType.RESET_STATE: {
      return state
    }
  }
  
  return state;
}
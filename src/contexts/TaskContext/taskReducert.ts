import type { TaskStateModel } from "../../models/TaskstateModel"
import { formattedSecondsRemaining } from "../../utils/formateSecondsToMinuts"
import { getNextCycle } from "../../utils/getNextCycle"
import { TaskActionType, type TaskActionModel } from "./taskActions"
import { initialTaskState } from "./initialTaskState"

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel
): TaskStateModel {
  switch (action.type) {
    case TaskActionType.START_TASK: {
      const newTask = action.payload
      const nextCycle = getNextCycle(state.currentCycle)
      const secondsRemaining = newTask.duration * 60

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formattedSecondsRemaining(secondsRemaining),
        tasks: [...state.tasks, newTask]
      }
    }

    case TaskActionType.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() }
          }
          return task
        })
      }
    }

    case TaskActionType.COMPLETE_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, completeDate: Date.now() }
          }
          return task
        })
      }
    }

    case TaskActionType.COUNT_DOWN: {
      return {
        ...state,
        secondsRemaining: action.payload.secondsRemaining,
        formattedSecondsRemaining: formattedSecondsRemaining(
          action.payload.secondsRemaining
        )
      }
    }

    case TaskActionType.RESET_STATE: {
      return initialTaskState
    }

    default: {
      return state
    }
  }
}

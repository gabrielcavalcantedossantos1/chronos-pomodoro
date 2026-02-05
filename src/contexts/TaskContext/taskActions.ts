import type { TaskModel } from "../../models/TaskModel"

export enum TaskActionType {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNT_DOWN = 'COUNT_DOWN',
  COMPLETE_TASK = 'COMPLETE_TASK'
}

export type TaskActionModel = {
  type: TaskActionType.START_TASK,
  payload: TaskModel
} | {
  type: TaskActionType.INTERRUPT_TASK,
} | {
  type: TaskActionType.RESET_STATE
} | {
  type: TaskActionType.COUNT_DOWN,
  payload: {secondsRemaining: number}
} | {
  type: TaskActionType.COMPLETE_TASK,
} 
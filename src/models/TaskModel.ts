import type {TaskStateModel}  from '../models/TaskstateModel'

export type TaskModel = {
    id: string
    name: string
    duration: number
    startDate: number
    completeDate: number | null
    interruptDate: number | null
    type: keyof TaskStateModel['config']
}

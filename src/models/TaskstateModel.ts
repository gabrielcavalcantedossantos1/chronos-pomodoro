import type { TaskModel } from './TaskModel'

// Estado -> componente -> filhos

export type TaskStateModel = {
    tasks: TaskModel[] //historico, MainForm
    secondsRemaining: number //CountDown, Historico, MainForm, button, home
    formattedSecondsRemaining: string //titulo, CountDown
    activeTask: TaskModel | null //countDown, MainForm, Historico, button
    currentCycle: number // home
    config: {
        workTime: number //mainForm
        shortBreakTime: number //mainForm
        longBreakTime: number //mainForm
    }
}

//css
import './styles/thema.css'
import './styles/global.css'

//components
import Home from './pages/Home'

//react
import { useState } from 'react'

//type
import type { TaskModel } from './models/TaskModel'

//type
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

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  }
}

const App = () => {
  const [state, setState] = useState<TaskStateModel>(initialState)

  console.log(state)

  return (<Home state={state} setState={setState} />)
}

export default App
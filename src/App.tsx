//components
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'
import { useTaskContext } from './contexts/TaskContext/useTaskContext'
import Home from './pages/Home'

//css
import './styles/global.css'
import './styles/thema.css'


const App = () => {

  //teste de context
  const {state} = useTaskContext()
  console.log(state)
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  )
}

export default App
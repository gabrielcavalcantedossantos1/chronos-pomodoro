//components
import Home from './pages/Home'

//css
import './styles/global.css'
import './styles/thema.css'
//type
import { TaskContextProvider, useTaskContext } from './contexts/TaskContext'


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
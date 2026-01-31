//components
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'
import Home from './pages/Home'

//css
import './styles/global.css'
import './styles/thema.css'


const App = () => {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  )
}

export default App
//components
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'
import Home from './pages/Home'

//css
import './styles/global.css'
import './styles/thema.css'
import { MessagesContainer } from './components/messagesContainer'


const App = () => {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <Home />
      </MessagesContainer>
    </TaskContextProvider>
  )
}

export default App
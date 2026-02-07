//components
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'

//css
import './styles/global.css'
import './styles/thema.css'
import { MessagesContainer } from './components/messagesContainer'
import { MainRouter } from './routers/MainRouter'


const App = () => {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter/>
      </MessagesContainer>
    </TaskContextProvider>
  )
}

export default App
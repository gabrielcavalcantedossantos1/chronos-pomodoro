//components
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'
import Home from './pages/Home'

//css
import './styles/global.css'
import './styles/thema.css'
import { MessagesContainer } from './components/messagesContainer'
import { BrowserRouter, Routes , Route} from 'react-router'
import NotFound from './pages/NotFound'
import AboutPomodoro from './pages/AboutPomodoro'


const App = () => {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about-pomodoro' element={<AboutPomodoro/>}/>

            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </MessagesContainer>
    </TaskContextProvider>
  )
}

export default App
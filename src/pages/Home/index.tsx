
//components
import CountDown from '../../components/CountDown/index'
import Container from '../../components/Container/index'
import MainForm from '../../components/mainForm/Index'
import MainTemplate from '../../Template/MainTemplate'
import { useEffect } from 'react'




const Home = () => {
  useEffect(() => {
    document.title = 'Home - Chronos Pomodoro'
  }, [])

  return (
  <>
    <MainTemplate>
        <Container>
            <CountDown />
        </Container>

        <Container>
            <MainForm />
        </Container>
    </MainTemplate>
  </>
  )
}

export default Home
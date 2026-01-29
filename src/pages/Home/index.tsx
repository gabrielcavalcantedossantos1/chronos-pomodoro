
//components
import CountDown from '../../components/CountDown/index'
import Container from '../../components/Container/index'
import MainForm from '../../components/mainForm/Index'
import MainTemplate from '../../Template/MainTemplate'



const Home = () => {

  return (
  <>
    <MainTemplate>
        <Container>
            <CountDown/>
        </Container>

        <Container>
            <MainForm/>
        </Container>
    </MainTemplate>
  </>
  )
}

export default Home
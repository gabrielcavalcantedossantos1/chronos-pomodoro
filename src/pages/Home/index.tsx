
//components
import CountDown from '../../components/CountDown/index'
import Container from '../../components/Container/index'
import MainForm from '../../components/mainForm/Index'
import MainTemplate from '../../Template/MainTemplate'

//type
import type { TaskStateModel } from '../../models/TaskstateModel'

export type HomeProps = {
  state: TaskStateModel,
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

const Home = ({state, setState}: HomeProps) => {

  return (
  <>
    <MainTemplate>
        <Container>
            <CountDown state={state} setState={setState}/>
        </Container>

        <Container>
            <MainForm state={state} setState={setState}/>
        </Container>
    </MainTemplate>
  </>
  )
}

export default Home
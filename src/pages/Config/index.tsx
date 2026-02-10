//components
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import MainTemplate from '../../Template/MainTemplate'
import DefaultInput from '../../components/DefaultInput/Index'
import DefaultButton from '../../components/DefaultButton/Index'
import { SaveIcon } from 'lucide-react'



export function Config(){

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{textAlign: 'center'}}>
          Modifique as configurações para o tempo de foco e pausa.
        </p>
      </Container>

      <Container>
        <form className="form">
          <div className="formRow">
            <DefaultInput id='workTime' label='Foco' />
          </div>

          <div className="formRow">
            <DefaultInput id='shortBreakTime' label='Pausa Curta' />
          </div>

          <div className="formRow">
            <DefaultInput id='longBreakTime' label='Pausa Longa' />
          </div>

          <div className="formRow">
              <DefaultButton icon={<SaveIcon/>} aria-label='Salvar configurações' title='Salvar configurações'/>
          </div>
        </form>
      </Container>
    </MainTemplate>
  )
}
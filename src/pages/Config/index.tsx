//components
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import MainTemplate from '../../Template/MainTemplate'
import DefaultInput from '../../components/DefaultInput/Index'
import DefaultButton from '../../components/DefaultButton/Index'
import { SaveIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useTaskContext } from '../../contexts/TaskContext'
import { showMessage } from '../../adapters/showMessage'
import { TaskActionType } from '../../contexts/TaskContext/taskActions'

export function Config() {

  useEffect(() => {
    document.title = 'Configurações - Chronos Pomodoro'
  }, [])
  const { state, dispatch } = useTaskContext()

  const workTimeInputRef = useRef<HTMLInputElement>(null)
  const shortBreakInputRef = useRef<HTMLInputElement>(null)
  const longBreakInputRef = useRef<HTMLInputElement>(null)

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const workTime = Number(workTimeInputRef.current?.value)
    const shortBreakTime = Number(shortBreakInputRef.current?.value)
    const longBreakTime = Number(longBreakInputRef.current?.value)



    if (workTime < 1 || workTime > 60) {
      showMessage.dismiss()
      showMessage.error('O tempo de foco deve estar entre 1 e 60 minutos')
      return
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      showMessage.dismiss()
      showMessage.error('O tempo de pausa curta deve estar entre 1 e 30 minutos')
      return
    }

    if (longBreakTime < 1 || longBreakTime > 45) {
      showMessage.dismiss()
      showMessage.error('O tempo de pausa longa deve estar entre 1 e 45 minutos')
      return
    }

    if (longBreakTime < shortBreakTime) {
      showMessage.dismiss()
      showMessage.error('O tempo de pausa longa deve ser maior que o tempo de pausa curta')
      return
    }

    showMessage.dismiss()
    showMessage.success('Configurações salvas com sucesso!')
    dispatch({
      type: TaskActionType.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      }
    })
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: 'center' }}>
          Modifique as configurações para o tempo de foco e pausa.
        </p>
      </Container>

      <Container>
        <form className="form" onSubmit={handleSaveSettings}>
          <div className="formRow">
            <DefaultInput
              id="workTime"
              label="Foco"
              ref={workTimeInputRef}
              defaultValue={state.config.workTime}
              type='number'
            />
          </div>

          <div className="formRow">
            <DefaultInput
              id="shortBreakTime"
              label="Pausa Curta"
              ref={shortBreakInputRef}
              defaultValue={state.config.shortBreakTime}
              type='number'
            />
          </div>

          <div className="formRow">
            <DefaultInput
              id="longBreakTime"
              label="Pausa Longa"
              ref={longBreakInputRef}
              defaultValue={state.config.longBreakTime}
              type='number'
            />
          </div>

          <div className="formRow">
            <DefaultButton
              icon={<SaveIcon />}
              aria-label="Salvar configurações"
              title="Salvar configurações"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  )
}

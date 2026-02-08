//css
import styles from'./styles.module.css'

//components
import Container from '../../components/Container/index'
import MainTemplate from '../../Template/MainTemplate'
import Heading from '../../components/Heading'
import DefaultButton from '../../components/DefaultButton/Index'
import { TrashIcon } from 'lucide-react'
import { useTaskContext } from '../../contexts/TaskContext'
import { formatDate } from '../../utils/formatdate'


export function History() {
  const {state} = useTaskContext()

  return (
  <>
    <MainTemplate>
        <Container>
            <Heading>
              <span>Histórico</span>
              <span className={styles.buttonContainer}>
                <DefaultButton icon={<TrashIcon />} color='red' aria-label='Apagar todo o histórico' title='Apagar Histórico'/>
              </span>
            </Heading>
        </Container>

        <Container>
          <div className={styles.resposiveTable}>
            <table>
              <thead>
                <tr>
                  <th>Tarefa</th>
                  <th>Duração</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {state.tasks.map(tarefa => {
                  return (
                    <tr key={tarefa.id}>
                      <td>{tarefa.name}</td>
                      <td>{tarefa.duration}min</td>
                      <td>{formatDate(tarefa.startDate)}</td>
                      <td>{tarefa.completeDate ? 'Concluida' : tarefa.interruptDate ? 'Interrompida' : 'Em andamento'}</td>
                      <td>{tarefa.type}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </Container>
    </MainTemplate>
  </>
  )
}

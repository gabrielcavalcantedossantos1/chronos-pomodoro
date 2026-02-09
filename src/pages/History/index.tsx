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
import { getTaskStatus } from '../../utils/getTaskstatus'
import { getFormatNameTask } from '../../utils/getFormatNameTask;'
import { sortTasks, type SortTasksOptions } from '../../utils/sortedTasks'
import { useState } from 'react'



export function History() {
  const {state} = useTaskContext()
  const [sortTaskOptinion, setSortTaskOptinion] = useState<SortTasksOptions>(() => {
    return {
      tasks: sortTasks({tasks: state.tasks}),
      field: 'startDate',
      direction: 'desc'
    }
  })

  function handleSortTasks({field}: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTaskOptinion.direction === 'desc' ? 'asc' : 'desc'

    setSortTaskOptinion({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTaskOptinion.tasks,
        field,
      }),
      direction: newDirection,
      field
    })
  }
  return (
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
                    <th onClick={() => handleSortTasks({field: 'name'})} className={styles.thSort}>Tarefa</th>
                  <th onClick={() => handleSortTasks({field: 'duration'})} className={styles.thSort}>Duração ⭥</th>
                  <th onClick={() => handleSortTasks({field: 'startDate'})} className={styles.thSort}>Data ⭥</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {sortTaskOptinion.tasks.map(tarefa => {
                  return (
                    <tr key={tarefa.id}>
                      <td>{tarefa.name}</td>
                      <td>{tarefa.duration}min</td>
                      <td>{formatDate(tarefa.startDate)}</td>
                      <td>{getTaskStatus(tarefa, state.activeTask)}</td>
                      <td>{getFormatNameTask(tarefa.type)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </Container>
    </MainTemplate>
  )
}

// css
import styles from './styles.module.css'

// components
import Container from '../../components/Container'
import MainTemplate from '../../Template/MainTemplate'
import Heading from '../../components/Heading'
import DefaultButton from '../../components/DefaultButton/Index'

// icons
import { TrashIcon } from 'lucide-react'


// hooks / context
import { useTaskContext } from '../../contexts/TaskContext'
import { useEffect, useState } from 'react'

// utils
import { sortTasks, type SortTasksOptions } from '../../utils/sortedTasks'
import { formatDate } from '../../utils/formatdate'
import { getTaskStatus } from '../../utils/getTaskstatus'
import { getFormatNameTask } from '../../utils/getFormatNameTask;'

// actions
import { TaskActionType } from '../../contexts/TaskContext/taskActions'


export function History() {
  const { state, dispatch } = useTaskContext()
  const hasTasks = state.tasks.length > 0

  const [sortTaskOption, setSortTaskOption] = useState<SortTasksOptions>(() => ({
    tasks: sortTasks({ tasks: state.tasks }),
    field: 'startDate',
    direction: 'desc',
  }))

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTaskOption.direction === 'desc' ? 'asc' : 'desc'

    setSortTaskOption({
      field,
      direction: newDirection,
      tasks: sortTasks({
        tasks: state.tasks, // sempre usa a fonte da verdade
        field,
        direction: newDirection,
      }),
    })
  }

  useEffect(() => {
    setSortTaskOption(prevState => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        field: prevState.field,
        direction: prevState.direction,
      }),
    }))
  }, [state.tasks])

  function handleResetHistory() {
    if (!confirm('Tem certeza que deseja apagar o histórico?')) return
    dispatch({ type: TaskActionType.RESET_STATE })
  }

  return (
    <MainTemplate>
      <Container>
        {hasTasks ? (
          <>
            <Heading>
              <span>Histórico</span>
                {hasTasks && (
                  <span className={styles.buttonContainer}>
                    <DefaultButton
                      icon={<TrashIcon />}
                      color="red"
                      aria-label="Apagar todo o histórico"
                      title="Apagar histórico"
                      onClick={handleResetHistory}
                     />
                  </span>
                )}
            </Heading>

            <div className={styles.responsiveTable}>
              <table>
                <thead>
                  <tr>
                    <th
                      className={styles.thSort}
                      onClick={() => handleSortTasks({ field: 'name' })}
                    >
                      Tarefa
                    </th>

                    <th
                      className={styles.thSort}
                      onClick={() => handleSortTasks({ field: 'duration' })}
                    >
                      Duração ⭥
                    </th>

                    <th
                      className={styles.thSort}
                      onClick={() => handleSortTasks({ field: 'startDate' })}
                    >
                      Data ⭥
                    </th>

                    <th>Status</th>
                    <th>Tipo</th>
                  </tr>
                </thead>

                <tbody>
                  {sortTaskOption.tasks.map(tarefa => (
                    <tr key={tarefa.id}>
                      <td>{tarefa.name}</td>
                      <td>{tarefa.duration}min</td>
                      <td>{formatDate(tarefa.startDate)}</td>
                      <td>{getTaskStatus(tarefa, state.activeTask)}</td>
                      <td>{getFormatNameTask(tarefa.type)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p style={{textAlign: 'center', fontWeight: 'bold'}}>Ainda não existem tarefas no histórico</p>
        )}
      </Container>
    </MainTemplate>
  )
}

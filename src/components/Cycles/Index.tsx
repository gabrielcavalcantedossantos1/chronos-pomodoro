//css
import { useTaskContext } from '../../contexts/TaskContext'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import styles from './styles.module.css'

const Index = () => {
  const {state} = useTaskContext()

  const cyclestap = Array.from({length: state.currentCycle})

  const cycleDescriptionMap = {
    workTime: 'Foco',
    shortBreakTime: 'Pausa Curta',
    longBreakTime: 'Pausa Longa'
  }

  return (
    <div className={styles.cycles}>
        <span>Ciclos:</span>

          <div className={styles.cycleDots}>
            {cyclestap.map((_, index) => {
              const nextCycle = getNextCycle(index)
              const nextCycleType = getNextCycleType(nextCycle)
              return <span key={index} title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`} aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`} className={`${styles.cyclesDot} ${styles[nextCycleType]}`}></span>
            })}
          </div>
    </div>
  )
}

export default Index
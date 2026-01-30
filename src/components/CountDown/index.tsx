//css
import styles from './styles.module.css'

//context
import { useTaskContext } from '../../contexts/TaskContext'

const CountDown = () => {
  const taskContext = useTaskContext()
 return (
    <div className={styles.container}>{taskContext.state.formattedSecondsRemaining}</div>
  )
}

export default CountDown
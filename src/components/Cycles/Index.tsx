//css
import styles from './styles.module.css'

const Index = () => {
  return (
    <div className={styles.cycles}>
        <span>Ciclos:</span>

          <div className={styles.cycleDots}>
            <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
            <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
            <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
            <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
            <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
            <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
            <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
            <span className={`${styles.cyclesDot} ${styles.longBreakTime}`}></span>
          </div>
    </div>
  )
}

export default Index
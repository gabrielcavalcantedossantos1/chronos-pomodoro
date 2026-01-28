//css
import styles from './styles.module.css'

//icons
import { TimerIcon } from 'lucide-react'

const Logo = () => {
 return (
    <div className={styles.logo}>
        <a href="#" className={styles.logoLink}>
            <TimerIcon/>
            <span>Chronos</span>
        </a>
    </div>
  )
}

export default Logo
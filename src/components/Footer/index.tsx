//css
import styles from './styles.module.css'



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="">Entenda como funciona a técnica Pomodoro</a>
      <a href="">Chronos Pomodoro &copy; {new Date().getFullYear()}</a>
    </footer>
  )
}

export default Footer
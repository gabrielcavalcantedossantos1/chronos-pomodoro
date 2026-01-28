//css
import styles from './styles.module.css'

//type
type ContainerProps = {
    children: React.ReactNode
}
const Container = ({ children } : ContainerProps) => {
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Container
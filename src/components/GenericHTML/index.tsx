//css
import styles from './styles.module.css'

//type
type GenericHtmlProps = {
    children: React.ReactNode
}

const GenericHTML = ({children} : GenericHtmlProps) => {
  return (
    <div className={styles.genericHtml}>
        {children}
    </div>
  )
}

export default GenericHTML
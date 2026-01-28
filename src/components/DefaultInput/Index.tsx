//css
import styles from './styles.module.css'

//type
type DefaultInputProps = {
    id: string;
    label: string
} & React.ComponentProps<'input'>

const Index = ({ type, id, label, ...rest }: DefaultInputProps) => {
  return (
    <>
    <label htmlFor={id}>{label}</label>
        
        <input className={styles.input} type={type} id={id} {...rest}/>
    </>
  )
}

export default Index
type DefaultInputProps = {
    id: string
} & React.ComponentProps<'input'>

const Index = ({ type, id }: DefaultInputProps) => {
    console.log(id)
  return (
    <>
        <label htmlFor={id}>Tarefa</label>
        <input type={type} id={id} />
    </>
  )
}

export default Index
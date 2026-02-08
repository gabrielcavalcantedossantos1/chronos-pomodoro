//css
import styles from'./styles.module.css'

//components
import Container from '../../components/Container/index'
import MainTemplate from '../../Template/MainTemplate'
import Heading from '../../components/Heading'
import DefaultButton from '../../components/DefaultButton/Index'
import { TrashIcon } from 'lucide-react'


export function History() {

  return (
  <>
    <MainTemplate>
        <Container>
            <Heading>
              <span>Histórico</span>
              <span className={styles.buttonContainer}>
                <DefaultButton icon={<TrashIcon />} color='red' aria-label='Apagar todo o histórico' title='Apagar Histórico'/>
              </span>
            </Heading>
        </Container>

        <Container>
          <div className={styles.resposiveTable}>
            <table>
              <thead>
                <tr>
                  <th>Tarefa</th>
                  <th>Duração</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {Array.from({length: 20}).map((_, index) => {
                  return (
                    <tr key={index}>
                      <td>Tarefa</td>
                      <td>00:00:00</td>
                      <td>00/00/0000</td>
                      <td>Concluido</td>
                      <td>Tipo</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </Container>
    </MainTemplate>
  </>
  )
}

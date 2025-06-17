import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, BtnLink } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo>Lista de Tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
      <BtnLink>Visualizar</BtnLink>
    </Card>
  )
}

export default Projeto

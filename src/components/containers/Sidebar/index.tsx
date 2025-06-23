import Titulo from '../../Titulo'
import Avatar from '../../Avatar'
import Paragrafo from '../../Paragrafo'
import { BotaoTrocaTema, ContainerAcompanha, Descricao } from './styles'

const Sidebar = () => (
  <aside>
    <ContainerAcompanha>
      <Avatar />
      <Titulo fontSize={20}>José Junior</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        jose-junior1
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-End
      </Descricao>
      <BotaoTrocaTema type="button">Trocar tema</BotaoTrocaTema>
    </ContainerAcompanha>
  </aside>
)

export default Sidebar

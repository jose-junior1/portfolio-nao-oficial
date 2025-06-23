import Titulo from '../../Titulo/index'
import Paragrafo from '../../Paragrafo/index'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">Olá! Eu sou o José Junior</Paragrafo>
    <Paragrafo tipo="principal">
      Desenvolvedor Front-End em formação, apaixonado por tecnologia, interfaces
      bonitas e código limpo. Atualmente cursando Engenharia Front-End pela EBAC
      e aplicando meus conhecimentos com projetos práticos.
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=jose-junior1&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jose-junior1&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre

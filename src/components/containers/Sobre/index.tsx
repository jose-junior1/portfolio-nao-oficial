import Titulo from '../../Titulo/index'
import Paragrafo from '../../Paragrafo/index'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
      neque perferendis suscipit adipisci. Soluta maxime optio perspiciatis
      accusantium labore vel, quia eius recusandae earum. Molestias, quidem.
      Recusandae magnam soluta eligendi?
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=jose-junior1&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jose-junior1&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre

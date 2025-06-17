import EstiloGlobal, { Container } from './styles'
import Sidebar from '../src/components/containers/Sidebar'
import Sobre from '../src/components/containers/Sobre'
import Projetos from '../src/components/containers/Projetos'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App

import { styled } from "styled-components"
import EstilosGlobais from "./Componentes/EstilosGlobais"
import Cabecalho from "./Componentes/Cabecalho"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 95.8%);
  width: 100%;
  min-height: 100vh;
`

function App() {
  return (
   
    <FundoGradiente>
       <EstilosGlobais />
       <Cabecalho />
    </FundoGradiente>
  )
}

export default App

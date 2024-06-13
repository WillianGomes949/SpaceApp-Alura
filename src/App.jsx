import { styled } from 'styled-components';
import bannerBackground from './assets/banner.png';
import Banner from './Componentes/Banner';
import EstilosGlobais from './Componentes/EstilosGlobais';
import Cabecalho from './Componentes/Cabecalho';
import BarraLateral from './Componentes/BarraLateral';

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 90%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <Banner
            texto="A galeria mais completa de fotos do espaço!"
            backgroundImage={bannerBackground}
          />
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  );
}

export default App;

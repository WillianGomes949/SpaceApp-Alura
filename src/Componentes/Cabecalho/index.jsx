import styled from "styled-components"
import CampoDeTexto from "../CampoDeTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        max-width: 212px;
    }
`

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt=""/>
            <CampoDeTexto />
        </HeaderEstilizado>
    )
}

export default Cabecalho
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const icones = [perfil, sacola]

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    align-content: center;
`

const Icones = styled.ul`
    display: flex;
`


function IconesHeader() {
    return (
        <Icones>
          {icones.map((icone) => (
            <Icone><img src={icone}></img></Icone>
          ))}

        </Icones>
    )
}

export default IconesHeader
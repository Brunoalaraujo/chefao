import * as C from './styles'
import Button from 'react-bootstrap/Button';

export const LandingPage = () => {
    return(
        <C.Container>
            <C.Title>Conheça as vantagens<br/>de colar com a gente</C.Title>
            <Button variant="light">Iniciar Tour</Button>

        </C.Container>
    )
}
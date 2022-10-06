import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as C from './styles'


export const SignUp = () => {
    return(
        <C.Wrapper>
            <C.Container>
                
                <C.SignUpForm>
                    <Row>
                        <Col>
                        <C.SignUpFormField placeholder="Digite um e-mail válido"/>
                        <C.SignUpFormField placeholder="Crie seu nickname da plataforma"/>
                        <C.SignUpFormField placeholder="Crie sua senha"/>
                        <C.SignUpFormField placeholder="Confirme sua senha"/>
                        </Col>
                    </Row>

                </C.SignUpForm>

                
            </C.Container>
        </C.Wrapper>
    )
}
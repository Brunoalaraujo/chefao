import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as C from './styles'


export const SignUp1 = () => {
    return(
        <C.Wrapper>
            <C.Container>
                <C.Title>Dados de Acesso</C.Title>
                <C.SignUpForm>
                    <Row>
                        <Col>
                        <C.SignUpFormField placeholder="Digite um e-mail válido"/>
                        <C.SignUpFormField placeholder="Crie seu nick da plataforma"/>
                        <C.SignUpFormField placeholder="Crie sua senha"/>
                        <C.SignUpFormField placeholder="Confirme sua senha"/>
                    
                        </Col>
                        <C.StyledArrowRightO/>
        
                    </Row>
                
                </C.SignUpForm>
            </C.Container>
        </C.Wrapper>
    )
}
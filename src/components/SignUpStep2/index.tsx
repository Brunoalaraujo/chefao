import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as C from './styles'
import addphoto from '../../assets/addphoto.png'

export const SignUp2 = () => {
    return(
        
        <C.Wrapper>
            
            
            <C.AddPhoto src={addphoto}/>
            <C.Container>
            
            <C.Title>Informações Pessoais</C.Title>
                
                <C.SignUpForm>
                    <Row>
                        <Col>
                        <C.SignUpFormField placeholder="Nome completo"/>
                        <C.SignUpFormField placeholder="CPF"/>
                        
                        <C.SignUpFormField width= {230}placeholder="Cidade"/>
                        <C.SignUpFormField width={150} placeholder="UF"/>
                        <C.SignUpFormField width={150} placeholder="Gênero" type="select" />
                        <C.SignUpFormField width={230} placeholder="Ano de nascimento"/>
                        </Col>

                        <C.StyledArrowRightO/>
                    </Row>
                
                </C.SignUpForm>
                </C.Container>
        </C.Wrapper>
    )
}
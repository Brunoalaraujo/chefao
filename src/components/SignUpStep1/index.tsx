import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Formik }  from 'formik';

import * as Yup from 'yup';
import * as C from './styles'
// const dispatch = useDispatch();


    const schema = Yup.object({
        
        email: Yup.string().email('E-mail não é válido').required('Campo E-mail é obrigatório'),
        nickname: Yup.string().required('É obrigatório criar seu nome de usuário'),
        password: Yup.string().required('Campo senha é obrigatório').min(6, 'Senha deve ter pelo menos 6 caracteres.'),
        confirmaSenha: Yup.string().required('Campo Confirmar senha é obrigatório').oneOf([Yup.ref('password'), null], 'As senhas digitadas devem ser iguais.'),
        
    })

const SignUp1 = () => {
    return (
        <C.Wrapper>
            <Formik validationSchema={schema}
                initialValues={{
                    email: '',
                    nickname: '',
                    password: '',
                    confirmaSenha: '',
                }}>
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                    <C.Container>
                        <C.Title>Dados de Acesso</C.Title>
                        <C.SignUpForm>
                            <Row>
                                <Col>
                                    <C.SignUpFormField
                                        name='email'
                                        id='email'
                                        type='text'
                                        value={values.email}
                                        onChange={handleChange}
                                        isValid={touched.email && !errors.email}
                                        isInvalid={touched.email && !!errors.email} placeholder="Digite um e-mail válido" />
                                    <C.SignUpFormField placeholder="Crie seu nick da plataforma" />
                                    <C.SignUpFormField placeholder="Crie sua senha" />
                                    <C.SignUpFormField placeholder="Confirme sua senha" />
                        
                                </Col>
                                <C.StyledArrowRightO />
            
                            </Row>
                    
                        </C.SignUpForm>
                    
                    </C.Container>
                )}
            </Formik>
        </C.Wrapper>
    )
}

export default SignUp1;
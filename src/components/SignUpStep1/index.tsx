import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as C from './styles'
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { baseUrl as api } from "../../services/config";
import { addUser } from '../../services/User';
import { useDispatch } from 'react-redux';
import { logIn } from '../../store/users';

export const SignUp1 = () => {


    const dispatch = useDispatch();


    const schema = Yup.object({
        
        email: Yup.string().email('E-mail não é válido').required('Campo E-mail é obrigatório'),
        nickname: Yup.string().required('É obrigatório criar seu nome de usuário'),
        password: Yup.string().required('Campo senha é obrigatório').min(6, 'Senha deve ter pelo menos 6 caracteres.'),
        confirmaSenha: Yup.string().required('Campo Confirmar senha é obrigatório').oneOf([Yup.ref('password'), null], 'As senhas digitadas devem ser iguais.'),
        
    })

    return(
        <Formik

            validationSchema={schema}
            initialValues={{
                
                email: '',
                nickname: '',
                password: '',
                confirmaSenha: '',
                
                
            }}
            onSubmit={async (values, { resetForm }) => {
                const { accessToken, user } = await addUser({...values, permission: 1})
                dispatch(logIn({ accessToken, permission: user.permission, user }))
                api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
                resetForm();
            }}
        >
             {({ handleSubmit, handleChange, values, touched, errors }) => (
        <C.Wrapper>
            <C.Container>
                <C.Title>Dados de Acesso</C.Title>
                <C.SignUpForm>
                    <Row>
                        <Col>
                        <C.SignUpFormField   name='email'
                                id='email'
                                type='text'
                                
                                value={values.email}
                                onChange={handleChange}
                                isValid={touched.email && !errors.email}
                                isInvalid={touched.email && !!errors.email} placeholder="Digite um e-mail válido"/>
                        <C.SignUpFormField placeholder="Crie seu nick da plataforma"/>
                        <C.SignUpFormField placeholder="Crie sua senha"/>
                        <C.SignUpFormField placeholder="Confirme sua senha"/>
                    
                        </Col>
                        <C.StyledArrowRightO/>
        
                    </Row>
                
                </C.SignUpForm>
                
            </C.Container>
        </C.Wrapper>
               )}  </Formik>
             )
}
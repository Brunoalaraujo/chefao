import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { signInUser } from '../../services/User';
import { logIn } from '../../store/users';


//import yup from 'yup';

import * as LG from './style';
import logo from '../../assets/Logo_Colaí.jpg';

const FormLogin: React.FC = () => { 

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const schema = yup.object({
    //     email: yup.string().email('E-mail não é válido').required('Campo E-mail é obrigatório'),
    //     password: yup.string().required('Campo Senha é obrigatório').min(6, 'Senha deve ter pelo menos 6 caracteres.')
    //})

    return (
        <Formik initialValues={{
            email: '',
            password: ''
        }}
            onSubmit={async values => {
                const { accessToken, user } = await signInUser(values);
                dispatch(logIn({ accessToken, permission: user.permission, user }));
                navigate("/")
            }}>          
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <LG.Container>
                    <LG.LoginForm className='m-2' onSubmit={handleSubmit}>
                        <img className='img-fluid' src={logo} />
                        <h1>Login</h1>
                        <LG.LoginFormGroup>
                            <LG.LoginFormInput
                                name='email'
                                id='email'
                                type='text'
                                placeholder='email'
                                value={values.email}
                                onChange={handleChange}
                                isValid={touched.email && !errors.email}
                                isInvalid={touched.email && !!errors.email}
                            />
                            <ErrorMessage name='email' component={LG.StyledErrorMessage} />
                        </LG.LoginFormGroup>
                        <LG.LoginFormGroup>
                            <LG.LoginFormInput
                                name='password'
                                id='senha'
                                type='password'
                                placeholder='senha'
                                value={values.password}
                                onChange={handleChange}
                                isValid={touched.password && !errors.password}
                                isInvalid={touched.password && !!errors.password}
                            />
                            <ErrorMessage name='password' component={LG.StyledErrorMessage} />
                        </LG.LoginFormGroup>
                        <LG.StyledButton size='sm' type='submit'>entrar</LG.StyledButton>
                        <LG.SignUpLink>
                            <a href='/'>cadastre-se</a>
                        </LG.SignUpLink>
                        <LG.SignUpLink>
                            <a href='/'>Esqueceu sua senha?</a>
                        </LG.SignUpLink>
                    </LG.LoginForm>
                </LG.Container>
            )}
        </Formik>    
    );
}

export default FormLogin;
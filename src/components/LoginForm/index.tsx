import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { signInUser } from '../../services/User';
import { logIn } from '../../store/users';


//import yup from 'yup';

import * as S from './style';
import logo from '../../assets/images/Group 9.svg';

const FormLogin: React.FC = () => { 

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const schema = yup.object({
    //     email: yup.string().email('E-mail não é válido').required('Campo E-mail é obrigatório'),
    //     password: yup.string().required('Campo Senha é obrigatório').min(6, 'Senha deve ter pelo menos 6 caracteres.')
    //})

    return (
        <S.Container1>
            <img className='img-fluid' src={logo} />
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
                    <S.Container>
                            
                        <S.LoginForm className='m-2' onSubmit={handleSubmit}>
                            
                            <S.LoginFormGroup>
                                <S.LoginFormInput
                                    name='email'
                                    id='email'
                                    type='text'
                                    placeholder='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    isValid={touched.email && !errors.email}
                                    isInvalid={touched.email && !!errors.email}
                                />
                                <ErrorMessage name='email' component={S.StyledErrorMessage} />
                            </S.LoginFormGroup>
                            <S.LoginFormGroup>
                                <S.LoginFormInput
                                    name='password'
                                    id='senha'
                                    type='password'
                                    placeholder='senha'
                                    value={values.password}
                                    onChange={handleChange}
                                    isValid={touched.password && !errors.password}
                                    isInvalid={touched.password && !!errors.password}
                                />
                                <ErrorMessage name='password' component={S.StyledErrorMessage} />
                            </S.LoginFormGroup>
                            <S.StyledButton size='sm' type='submit'>Confirmar</S.StyledButton>
                            <S.ButtonStyledTransparent size='sm' type='submit'>Criar minha conta</S.ButtonStyledTransparent>
                            <S.SignUpLink>
                                <a href='/'>Esqueci minha senha?</a>
                            </S.SignUpLink>
                        </S.LoginForm>
                    </S.Container>
                )}
            </Formik>
        </S.Container1>    
    );
}

export default FormLogin;
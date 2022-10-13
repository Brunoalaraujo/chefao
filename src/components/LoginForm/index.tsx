import React from 'react';
import { useState, FormEvent} from 'react';
import { ErrorMessage, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import { signInUser } from '../../services/User';
import { logIn } from '../../store/users';



import * as S from './style';
import logo from '../../assets/images/Group 9.svg';

const FormLogin: React.FC = () => { 

    const dispatch = useDispatch();
    const navigate = useNavigate();

   const [email, setEmail] = useState<string>("");
   const [password, setPassword] = useState<string>("");



   const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await signInUser({ email, password });

      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("id", response.data.id);
      dispatch(getUser());

      navigate("/");
    } catch (error) {
      alert("Opa! Deu algo errado!");
    }
  };

    return (
        <S.Container1>
            <img className='img-fluid' src={logo} />
         
             
                     
               
                    <S.Container>
                            
                        <S.LoginForm className='m-2' onSubmit={handleSubmit}>
                            
                            <S.LoginFormGroup>
                                <S.LoginFormInput
                                    name='email'
                                    id='email'
                                    type='text'
                                    placeholder='email'
                                    value={email}
                                    onChange={handleChange}
                                   
                                />
                                <ErrorMessage name='email' component={S.StyledErrorMessage} />
                            </S.LoginFormGroup>
                            <S.LoginFormGroup>
                                <S.LoginFormInput
                                    name='password'
                                    id='senha'
                                    type='password'
                                    placeholder='senha'
                                    value={password}
                                    onChange={handleChange}
                                    
                                />
                                <ErrorMessage name='password' component={S.StyledErrorMessage} />
                            </S.LoginFormGroup>
                            <S.StyledButton size='sm' type='submit'>Confirmar</S.StyledButton>
                            <S.ButtonStyledTransparent size='sm' type='submit'><Link to={"/signup"}/>Criar minha conta</S.ButtonStyledTransparent>
                            <S.SignUpLink>
                                <a href='/'>Esqueci minha senha?</a>
                            </S.SignUpLink>
                        </S.LoginForm>
                    </S.Container>
              
            
        </S.Container1> 
 )}

export default FormLogin;
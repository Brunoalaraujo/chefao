import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as C from './styles'
import submit from '../../assets/images/submitbutton.png'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addUser } from '../../services/User';
import { logIn } from '../../store/users';
import { baseUrl as api } from "../../services/config";

const schema = Yup.object({
        
    email: Yup.string().email('E-mail não é válido').required('Campo E-mail é obrigatório'),
    nickname: Yup.string().required('É obrigatório criar seu nome de usuário'),
    password: Yup.string().required('Campo senha é obrigatório').min(6, 'Senha deve ter pelo menos 6 caracteres.'),
    confirmaSenha: Yup.string().required('Campo Confirmar senha é obrigatório').oneOf([Yup.ref('password'), null], 'As senhas digitadas devem ser iguais.'),
    nome:Yup.string().required('É obrigatório inserir seu nome'),
    cidade:Yup.string().required('É obrigatório adicionar sua localização'),
    uf:Yup.string().required('É obrigatório adicionar sua localização'),
    genero: Yup.string().required('É obrigatório apontar seu genêro'),
    nascimento: Yup.string().required('É obrigatório confirmar seu ano de nascimento')
})

export const SignUp = () => {

const dispatch = useDispatch();
    return(
        
        <C.Wrapper>
            <C.Title>Cadastro de Usuário</C.Title>
              <Formik validationSchema={schema}
                initialValues={{
                    email: '',
                    nickname: '',
                    password: '',
                    confirmaSenha: '',
                    nome: '',
                    cidade: '',
                    uf: '',
                    genero: '',
                    nascimento: '',
                    
                }}
                onSubmit={async (values, { resetForm }) => {
                    const { accessToken, user } = await addUser({ ...values, permission: 1 })
                    dispatch(logIn({ accessToken, permission: user.permission, user }))
                    api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
                    resetForm();
                }}
            >
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
          
            <C.SignUpForm onSubmit={handleSubmit}>
                

      <Col>
                        <C.SignUpFormField  name='email'
                                id='email'
                                type='text'
                                value={values.email}
                                onChange={handleChange}
                                isValid={touched.email && !errors.email}
                                isInvalid={touched.email && !!errors.email}
                                 placeholder="Digite um e-mail válido"/>
                        <C.SignUpFormField   name='nickname'
                                id='nickname'
                                type='text'
                                value={values.nickname}
                                onChange={handleChange}
                                isValid={touched.nickname && !errors.nickname}
                                isInvalid={touched.nickname && !!errors.nickname}
                                 placeholder="Crie seu nick da plataforma"/>
                        <C.SignUpFormField name='password'
                                id='senha'
                                type='password'
                                value={values.password}
                                        onChange={handleChange}
                                        isValid={touched.password && !errors.password}
                                        isInvalid={touched.password && !!errors.password}
                               placeholder="Crie sua senha"/>
                        <C.SignUpFormField  name='confirmaSenha'
                                id='confirma-senha'
                                type='password'
                                placeholder='Confirmar senha'
                                value={values.confirmaSenha}
                                onChange={handleChange}
                                isValid={touched.confirmaSenha && !errors.confirmaSenha}
                                isInvalid={touched.confirmaSenha && !!errors.confirmaSenha}/>
                     

                     
                       
                        <C.SignUpFormField id='nome'
                         type='text'
                          value={values.nome}
                          placeholder="Nome completo"
                          onChange={handleChange}
                          isValid={touched.nome && !errors.nome}
                          isInvalid={touched.nome && !errors.nome}/>
                          <Row>
                        <C.SignUpFormField width= {230}placeholder="Cidade"
                        id='cidade' type='text' value={values.cidade}
                        onChange={handleChange}
                        isValid={touched.cidade && !errors.cidade}
                        isInvalid={touched.cidade && !errors.cidade}/>
                        <C.SignUpFormField width={150} placeholder="UF"
                        id='uf' type='text' value={values.uf} onChange={handleChange}
                        isValid={touched.uf && !errors.uf}
                        isInvalid={touched.uf && !errors.uf}/> </Row>
                        <Row>
                        <C.SignUpFormField width={150} placeholder="Gênero" type="select"
                        id='genero' value={values.genero} onChange={handleChange}
                        isValid={touched.genero && !errors.genero}
                        isInvalid={touched.genero && !errors.genero}/> 
                        <C.SignUpFormField width={230} placeholder="Ano de nascimento"
                        id='nascimento' type='date' value={values.nascimento} onChange={handleChange}
                        isValid={touched.nascimento && !errors.nascimento}
                        isInvalid={touched.nascimento && !errors.nascimento}/>
                        </Row>
                        
                        </Col>
                        <C.SubmitButton type="submit"><C.StyledArrow src={submit}/></C.SubmitButton> 
                </C.SignUpForm>
                
                </C.Container>
             )}
             </Formik>
                  
        </C.Wrapper>
    )
}
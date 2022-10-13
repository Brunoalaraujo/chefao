import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as C from './styles'
import submit from '../../assets/images/submitbutton.png'
import { addUser } from '../../services/User';
import { FormEvent, useState } from 'react';


export const SignUp = () => {

  
  const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
   // const [confirmarSenha, setConfirmarSenha] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [gender, setGender] = useState<string>("");
   // const [nascimento, setNascimento] = useState<string>("");
    
    const handleSubmit = async (event: FormEvent) => {
      event.preventDefault();

      const payload = {
        name,
        email,
        password,
       // confirmarSenha,
        nickname,
        address: {
        city,
        state },
        gender,
       // nascimento,
       
      }
      try {
        const response = await addUser(payload)
        if(response.status !== 201) {
          return alert("Ocorreu um erro!")
        }
        alert("Cadastro efetuado com sucesso!")
      } catch (error) {
        alert("Ocorreu um erro!")
        
      }

    } 

    return(
        
        <C.Wrapper>
            <C.Title>Cadastro de Usuário</C.Title>
              
               
            <C.Container>
          
            <C.SignUpForm onSubmit={handleSubmit}>
                
      <Col>
      <Row>
                        <C.SignUpFormField  name='email'
                                id='email'
                                type='text'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                
                                 placeholder="Digite um e-mail válido"/> </Row>
                               <Row>
                        <C.SignUpFormField   name='nickname'
                                id='nickname'
                                type='text'
                                value={nickname}
                                onChange={(event) => setNickname(event.target.value)}
                              
                                 placeholder="Crie seu nick da plataforma"/></Row>
                                 <Row>
                        <C.SignUpFormField name='password'
                                id='senha'
                                type='password'
                                value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                       
                               placeholder="Crie sua senha"/></Row>
                               <Row>
                        <C.SignUpFormField  name='confirmaSenha'
                              //  id='confirma-senha'
                                type='password'
                                placeholder='Confirmar senha'
                               // value={confirmarSenha}
                              //  onChange={(event) => setConfirmarSenha(event.target.value)}
                              /></Row>
            
                    <Row>
                        <C.SignUpFormField id='name'
                         type='text'
                          value={name}
                          placeholder="Nome completo"
                          onChange={(event) => setName(event.target.value)}/>
                         </Row>
                          <Row>
                        <C.SignUpFormField width= {220}placeholder="Cidade"
                        id='address.city' type='text' value={city}
                        onChange={(event) => setCity(event.target.value)}
                      />
                        <C.SignUpFormField width={170} placeholder="UF"
                        id='address.state' type='text' value={state} onChange={(event) => setState(event.target.value)}
                        /> </Row>
                        <Row>
                        <C.SignUpFormField width={170} placeholder="Gênero" type="text"
                    
                        id='gender' value={gender} onChange={(event) => setGender(event.target.value)}
                        /> 
                      <C.SignUpFormField width={220} placeholder="Ano de nascimento"/>
                     
                    
                        </Row> 
                        </Col>
                        <C.SubmitButton type="submit"><C.StyledArrow src={submit}/></C.SubmitButton> 
                </C.SignUpForm>
                
                </C.Container>
            
                  
        </C.Wrapper>
    )
}
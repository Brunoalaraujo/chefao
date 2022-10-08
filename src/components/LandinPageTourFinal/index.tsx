import React from 'react';
import BgDesktop from "../../assets/images/BG-Desktop.png";
import Persona from '../../assets/images/Personagem2.png'
import LogoG5 from '../../assets/images/Group 5.png';
import { Container, Title, Logo, Personagem, Fundoimg, StyledButton, SignupButton } from './styles';

export const LandingPageTourFinal = () => {
    return (
        <Container>
            <Fundoimg src={BgDesktop} />

            <Title>SEJA BEM-VINDO AO</Title>
            <SignupButton>
                <a href='/'>Já tenho cadastro</a>
            </SignupButton>

            
            <Logo src={LogoG5} alt="logo do cola ai" />


            <Personagem src={Persona} />
            <StyledButton >
                <a href='/signup'>Quero me cadastrar</a>
            </StyledButton>

            
            
        </Container>
        
    )
}
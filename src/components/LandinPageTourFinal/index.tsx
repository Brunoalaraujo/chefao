import React from 'react';
import LogoG5 from '../../assets/images/Group 5.png';
import { Container, Title, Logo } from './styles';

export const LandingPageTourFinal = () => {
    return (
        <Container>
            <Title>SEJA BEM-VINDO AO</Title>
            <Logo src={LogoG5} alt="logo do cola ai" />
        </Container>
    )
}
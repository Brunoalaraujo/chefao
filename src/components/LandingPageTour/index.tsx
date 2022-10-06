import React from 'react';

import Onboarding3web from "../../assets/images/Onboarding3WebT.jpg";
import * as LG from './styles'

export const LandingPageTour = () => {
    return(
        <LG.Container>
            <div>
                <img src={Onboarding3web} />
            </div>
            <LG.Aside>
                <LG.Title>Conheça as<br/> vantagens<br/> de colar com<br/> a gente</LG.Title>
                <LG.StyledButton >
                    <a href='/tour'>Iniciar Tour</a>
                </LG.StyledButton>
                <LG.StyledButton >
                    <a href='/signup'>Quero me cadastrar</a>
                </LG.StyledButton>
                <LG.SignUpLink>
                    <a href='/'>Retornar para o Feed</a>
                </LG.SignUpLink>
            </LG.Aside>
        </LG.Container>
    )
}